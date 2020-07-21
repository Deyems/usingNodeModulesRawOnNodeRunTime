const {createGzip} = require('zlib');
const fs = require('fs');
const file = 'newFile.txt';

//What if we dont want to listen to 
//Events on those streams as we are 
//Piping them?

const {Transform} =  require('stream');

const progress = new Transform({
    transform (chunk, encoding, callback){
        process.stdout.write('.');
        callback(null, chunk);
    }
});

fs.createReadStream(file)
    .pipe(createGzip())
    .pipe(progress)
    // .on('data', () => process.stdout.write('.'))
    .pipe(fs.createWriteStream(file + '.zip'))
    .on('finish', () => console.log('Done'));

