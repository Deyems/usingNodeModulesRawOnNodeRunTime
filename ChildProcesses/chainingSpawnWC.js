const { spawn } = require('child_process');

const find = spawn('pwd', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

//Adding Input stream to Output stream
find.stdout.pipe(wc.stdin);
// process.stdin.pipe(find.stdin).pipe(wc.stdin);

wc.stdout.on('data', (data)=> {
    console.log(`Number of files ${data}`);
});
