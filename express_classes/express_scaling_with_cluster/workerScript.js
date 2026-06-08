// workerScript.js
import { parentPort } from 'worker_threads';


// console.log(parentPort, 'ss')

// 1. Perform your heavy CPU task here
function heavyCalculation() {
    let result = 0;
    for (let i = 0; i < 1e9; i++) { // Simulated complex task
        result += i;
    }
    return result;
}


// 1000000000

// 2. Execute the task
const calculationOutput = heavyCalculation();

// 3. Post the message back to your Express app.get route
parentPort.postMessage(calculationOutput);