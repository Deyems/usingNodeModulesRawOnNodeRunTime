/*
//Exceptions are immediately thrown 
//do something with data
*/

const fs = require('fs');
const path = require('path');
// console.log(__dirname);
const dirname = path.join(__dirname,'files');

const files = fs.readdirSync(dirname);

console.log(files);

files.forEach(file => {
    const filePath = path.join(dirname, file);
    fs.stat(filePath, (err, stats) => {
        if(err) throw err;
        // console.log(stats);

        fs.truncate(filePath, stats.size/2, (err) => {
            if(err) throw err;
        });
    });
});

// fs.readFile('corruptHttps.js', (err,data) => {
//     if(err) throw err;
//     console.log(data.toString().split('\n'));
//     let len = data.toString().split('\n').length;
//     let midPoint = (len+1)/2;
// });

// const data = fs.readFileSync(__filename);
// console.log(data);

