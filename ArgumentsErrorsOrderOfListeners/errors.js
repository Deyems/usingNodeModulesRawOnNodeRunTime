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
})

//To handle such crash, We would do
/* withTime.on('error',console.error); */

//ANOTHER way to handle program crash is
//To Use the uncaughtException

process.once('uncaughtException', (err) => {
    console.log(err);

    process.exit(1);
});

//If we trigger an error here the emitter
//event will not process other calls on the
//Emitter event. Causing a crash 
withTime.execute(fs.readFile,'');

withTime.execute(fs.readFile,__filename);
