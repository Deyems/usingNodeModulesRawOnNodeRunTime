// const http = require('http');

// const req = http.request(
//     {hostname: 'www.google.com'},
//     (res) => {
//         console.log(res.statusCode);
//         console.log(res.headers);
//         res.on('data', (data) => {
//             console.log(data.toString());
//         });
//     }
// );

// req.on('error', (e) => console.log(e));

// req.end();

//WHAT IF WE ARE NOT SENDING ANY REQUEST
//WE CAN USE THE GET REQUEST METHOD

const http = require('http');

//req: http:ClientRequest
const req = http.get(
    'http://www.google.com',
    (res) => {
        //req: http:IncomingMessage
        console.log(res.statusCode);
        console.log(res.headers);
        res.on('data', (data) => {
            console.log(data.toString());
        });
    }
);

req.on('error', (e) => console.log(e));

//req: http:Agent
console.log(req.agent);

//THE ABOVE request Using the GET is normally 
//Performed by the globalAgent on the http

//NOTE
// https works exactly like the http we only
// change the http to https

//IN the server case, We have the below
/*
//server: http.Server
const server = require('http').createServer();

server.on('request', (req, res)=> {
    //req: http.IncomingMessage
    //res: http.ServerResponse

    res.writeHead(200, {'contnent-type': 'text/plain' });
    res.end('Hellow world\n');
});

server.listen(8000);
*/
