import express from 'express';
import { Worker } from 'worker_threads';

const app = express();

app.get('/heavy-task', (req, res) => {
    // Spin up an isolated background thread for computational execution
      const worker = new Worker('./workerScript.js');

      worker.on('message', (result) => {
        res.json({ success: true, data: result });
      });

      worker.on('error', (err) => {
        res.status(500).json({ error: err.message });
      });

    // function heavyCalculation() {
    //     let result = 0;
    //     for (let i = 0; i < 1e9; i++) { // Simulated complex task
    //         result += i;
    //     }
    //     return result;
    // }

    // const calculationOutput = heavyCalculation();

    // res.json({ success: true, data: calculationOutput });

});

app.listen(3000, () => {
    console.log('listning in 3000')
})