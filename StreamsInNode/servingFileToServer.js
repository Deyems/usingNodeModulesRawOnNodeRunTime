
const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res) => {
    // fs.readFile('./big.file', (err, data)=> {
    //     if(err) throw err;
    //     res.end(data);
    // });
    /** MORE EFFECTIVE WAY */
    let src = fs.createWriteStream('./big.file');
    src.pipe(res);
});

server.listen(5000);