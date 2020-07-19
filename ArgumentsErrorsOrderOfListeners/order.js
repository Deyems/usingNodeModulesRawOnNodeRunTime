const fs = require('fs');

const EventEmitter = require('events');
class WithTime extends EventEmitter{
    execute(asyncFunc, ...args){
        console.time('execute');
        asyncFunc(...args, (err,data) => {
            if(err) return this.emit('error',err);
        this.emit('data', data);
        console.timeEnd('execute');
        });
    }
}
const withTime = new WithTime();
withTime.on('data',(data)=> {
    console.log(`length: ${data.length}`);
});

withTime.on('data',(data) => {
    console.log(`Characters: ${data.toString().length}`);
});

//To Call an event Before the one called b4 it
withTime.prependListener('data',(data) => {
    console.log(`Prepend Characters: ${data.toString().length}`);
});

withTime.execute(fs.readFile,__filename);
