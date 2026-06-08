import cluster from 'cluster';
import os from 'os';
import express from 'express';

// console.log(os.availableParallelism(), 'available parallism')

if (cluster.isPrimary) {
  const numCPUs = os.availableParallelism ? os.availableParallelism() : os.cpus().length;
  console.log(`Primary system active. Forking ${numCPUs} application workers...`);

  // Fork workers based on available core counts
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} failed. Restarting replacement instance...`);
    cluster.fork(); // Automatically replaces dead processes
  });
} else {
  // Worker processes execute the standard server setup
  const app = express();
  
  app.get('/compute', (req, res) => {
    res.send(`Handled securely by worker thread PID: ${process.pid}`);
  });

  app.listen(3000, () => {
    console.log('server is running on 3000')
  });
}