const {createGzip} = require('zlib');
const fs = require('fs');
const crypto = require('crypto');

const {Transform} =  require('stream');
// const file = 'newFile.txt';
const file = process.argv[2];

const progress = new Transform({
    transform (chunk, encoding, callback){
        process.stdout.write('.');
        callback(null, chunk);
    }
});
// let iv = crypto.randomBytes(16);
//Compress file
//Encrypt file
// .pipe(fs.createWriteStream(file + '.zz'))

fs.createReadStream(file)
    .pipe(createGzip())
    .pipe(crypto.createCipher('aes192', 'a_secret'))
    .pipe(progress)
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => console.log('Done'));
