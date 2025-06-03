// The Process Is Known As Clusterization : Which handels multiple requests concurrently, By using Multiple Instance Within Your Nodejs Server That Means Control The Workload / Traffic.
// This is a simple example of how to use the cluster module in Node.js.
// It creates a primary process that forks worker processes equal to the number of CPU cores.



import cluster from "cluster";
import express from "express";
import os from "os";

const numCPUs = os.cpus().length;
console.log(`Number of CPUs: ${numCPUs}`);


if(cluster.isPrimary){
    console.log('Primary process started');
    // This Logic For Making Forks, Number of Workers Equal to Number of CPUs.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    console.log('Worker process started');
    const app = express()
    const port = 3000;

    app.get('/', (req, res) => {
        return res.json({ message: `Hello World! ${process.pid}` });
    });

    app.listen(port, () => {
        console.log(`CLUSTER APPLICATION LISTEN ON ${port}`);
    });
}

/*  This is the worker process, it will run the express server
    Each worker will handle requests independently
    The primary process will fork workers based on the number of CPU cores
    This allows the application to handle more requests concurrently
    The primary process will not handle requests, it only manages the workers
    The workers will run the express server and handle requests
    The primary process will not exit, it will keep running to manage the workers
    If a worker dies, the primary process will fork a new worker to replace it
    This allows the application to be resilient and handle failures
    The workers will run the express server and handle requests
    The primary process will not handle requests, it only manages the workers
    The workers will run the express server and handle requests .*/


    
