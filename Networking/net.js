process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timeStamp(){
    const now = new Date();
    return `${now.getHours()}: ${now.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = counter++;
    // sockets[socket.id] = socket;
    console.log('Client connected');
    socket.write('Please type your name: \n');

    socket.on('data', data => {
        // console.log('data is:', data);
        // socket.write(`${socket.id}`);
        // socket.write(data);
        if(!sockets[socket.id]){
            socket.name = data.toString().trim();
            socket.write(`Welcome: ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }

        Object.entries(sockets).forEach(([key,cs]) => {
            if(socket.id == key) return;

            cs.write(`${socket.name} - ${timeStamp()}:`);
            cs.write(data);
        });
    });
    //If we want to keepGlobal Encoding
    // socket.setEncoding('utf-8');

    socket.on('end', () => {
        //When Using Multiple Sockets at the
        //Same time, We can encounter a crash 
        //If one person disconnects.
        //Thus we can do the following below:
        delete sockets[socket.id];
        console.log('Client disconnected');
    });

});

server.listen(8000, () => console.log('Server bound'));
