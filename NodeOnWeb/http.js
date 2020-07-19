
const fs =require('fs');

const server = require('http').createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
});


server.on('request', (req,res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello world\n');

    // setTimeout(() => {
    //     res.write('Another Hello world\n');
    // },1000);
    
    // setTimeout(() => {
    //     res.write('Yet Another Hello world\n');
    // },130000);
});

// server.timeout = 1000;

server.listen(443);
