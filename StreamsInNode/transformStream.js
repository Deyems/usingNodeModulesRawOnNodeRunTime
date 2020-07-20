const {Transform} = require('stream');

const myTransformStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(myTransformStream).pipe(process.stdout);

// myTransformStream.currentCharCode = 65;