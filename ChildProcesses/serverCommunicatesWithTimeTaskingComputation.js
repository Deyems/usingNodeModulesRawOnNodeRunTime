const http = require('http');
const {fork} = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url == '/compute'){
        const timeConsumer = fork('solvingLongComputationProblems.js');
        timeConsumer.send('start');

        timeConsumer.on('message', (sum) => {
            res.end(`Sum is ${sum}`);
        });
        // process.send();
    }else res.end('Ok');
});

server.listen(3000);
