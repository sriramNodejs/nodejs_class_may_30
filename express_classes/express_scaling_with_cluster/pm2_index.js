
import express from 'express';

// Worker processes execute the standard server setup
const app = express();

app.get('/compute', (req, res) => {
  res.send(`Handled securely by worker thread PID: ${process.pid}`);
});

app.listen(3000, () => {
  console.log('server is running on 3000')
});