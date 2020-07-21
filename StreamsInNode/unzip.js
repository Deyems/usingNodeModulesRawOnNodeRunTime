const fs = require('fs');

const {createGunzip} = require('zlib');

const file = process.argv[2];

const {Transform} = require('stream');
const { createDecipher } = require('crypto');

const progress = new Transform({
    transform(data,encoding,callback){
        process.stdout.write('.');
        callback(null, data);
    }
});

fs.createReadStream(file)
.pipe(createDecipher('aes192','a_secret'))
.pipe(createGunzip())
.pipe(progress)
.pipe(fs.createWriteStream(file.slice(0,-3)))
.on('finish', () => console.log('Done'));
