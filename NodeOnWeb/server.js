//IN the server case, We have the below

//server: http.Server
const server = require('http').createServer();

const fs = require('fs');
const data = {};

server.on('request', (req, res)=> {
    //req: http.IncomingMessage
    //res: http.ServerResponse
    console.log(req.url);
    switch (req.url) {
        case '/api':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
            break;
        case '/':
            res.writeHead(301, {'Location': '/home'});
            res.end();
            break;

        case '/home':
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync(`.${req.url}.html`));
            break;
        
        default:
            res.writeHead(404);
            res.end();
            // break;
    }

    res.writeHead(200, {'Content-type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(8000);
