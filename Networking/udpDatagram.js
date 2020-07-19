const dgram = require('dgram');

const PORT = 3333;
const HOST = '127.0.0.1';

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}: ${rinfo.port} - ${msg}`);
})

server.bind(PORT, HOST);

//What if we want to work with Client

// setInterval(function(){
    const client = dgram.createSocket('udp4');

    //HOW ABOUT SENDING A BUFFER;
    const msg = Buffer.from('Pluralsight rocks');
    client.send(msg, 0, 11, PORT, HOST, (err) => {
        if(err) throw err;
        console.log('UDP message sent');
            client.send(msg, 11, 6, PORT, HOST, (err) => {
            if(err) throw err;
            console.log('UDP other-half msg sent');
        client.close();
        });
    });
// },1000);


