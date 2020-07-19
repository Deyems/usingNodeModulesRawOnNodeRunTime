//USAGE OF process.nextTick

const fs = require('fs');

// function fileSize(fileName, cb){
//     if(typeof fileName !== 'string'){
//         return cb(new TypeError('argument should be string'));
//     }
//     fs.stat(fileName, (err,stats) => {
//         if(err) return cb(err);
//         cb(null, stats.size);
//     });
// }

// fileSize(__filename, (err,size)=> {
//     if(err) throw err;
//     console.log(`Size in KB: ${size/1024}`);
// });

/*To rectify this error, We perform the
function shown after all these comments */
// fileSize(3, (err,size)=> {
//     if(err) throw err;
//     console.log(`Size in KB: ${size/1024}`);
// });

function fileSize(fileName, cb){
    if(typeof fileName !== 'string'){
        return process.nextTick(
        cb, new TypeError('argument should be string'))
    }    
    fs.stat(fileName, (err,stats) => {
        if(err) return cb(err);
        cb(null, stats.size);
    });
}
//This would make the error happen asynchronously

fileSize(3, (err,size)=> {
    if(err) throw err;
    console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');
