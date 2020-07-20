
const zlib = require('zlib');
const fs = require('fs');
const file = process.argv[2];

if(process.argv[2] == '') return;
fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + '.gz'));
