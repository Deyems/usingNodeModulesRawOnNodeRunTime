const { Transform } = require('stream');

const strToArr = new Transform({
    readableObjectMode: true,

    transform(chunk, encoding, callback){
        // console.log(chunk);
        // const str = "Enter letters with comma,separated values:\n";
        // console.log(str);
        this.push(chunk.toString().trim().split(','));
        callback();
    }
});

const arrToObj = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,

    transform(chunk, encoding, callback){
        const obj = {};
        for(let i = 0; i < chunk.length; i += 2){
            // console.log(chunk[i]);
            obj[chunk[i]] = chunk[i+1];
        }
        this.push(obj);
        callback();
    }
});

const objToStr = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback){
        this.push(JSON.stringify(chunk)+'\n');
        callback();
    }
});

process.stdin.pipe(strToArr).pipe(arrToObj).pipe(objToStr).pipe(process.stdout);
