const {Readable} = require('stream');

// const inStream = new Readable();
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// //To denote end of input Stream, We can pass Null
// inStream.push(null);
// inStream.pipe(process.stdout);

// MAKING A READABLE INPUT STREAM 
// BY CUSTOMIZING THE INPUTS

// const { Readable } = require('stream');
const myInpStream = new Readable({
    read(size){
        // console.log(this);
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++));
            if(this.currentCharCode > 90){
                this.push(null);
                return;
            }
        },100);
    }
});

myInpStream.currentCharCode = 65;

myInpStream.pipe(process.stdout);

process.on('exit', () => {
    console.error(`\n\ncurrentCharCode is ${myInpStream.currentCharCode}`);
});

process.stdout.on('error', process.exit);

