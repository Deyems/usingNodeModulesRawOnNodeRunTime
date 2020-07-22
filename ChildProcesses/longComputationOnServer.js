const http = require('http');

const longComputation = () => {
    let sum = 0;
    for(let i =0; i < 1e9; ++i){
        sum += i;
    }
    return sum;
}

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url == '/compute'){
        const summation = longComputation();
        return res.end(`Sum is ${summation}`);
    }else {
        res.end('Ok');
    }
});

server.listen(3000);
