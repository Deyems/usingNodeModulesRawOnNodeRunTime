
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'tester');

const files = fs.readdirSync(dirname);
const ms1Day = 24*60*60*1000;

files.forEach(file => {
    let eachFile = path.join(dirname, file);
    fs.stat(eachFile, (err,stats)=> {
        if(err) throw err;
        if(Date.now() - stats.mtime.getTime() > 7*ms1Day){
            fs.unlink(eachFile, (err) => {
                if(err) throw err;
                console.log(`deleted ${eachFile}`);
            });
        }
        // console.log(stats);
    });
});
