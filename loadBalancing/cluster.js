const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for(let i = 0; i < cpus; i++){
        cluster.fork();
    }
    Object.values(cluster.workers).forEach((worker) =>{
        worker.send(`Hello Worker ${worker.id}`);
    });
}else require("./load-bal");
