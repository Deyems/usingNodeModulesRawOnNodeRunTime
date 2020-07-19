const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter{
    execute(asyncFunc, ...args){
        console.time('executing');
        this.emit('begin');
        asyncFunc(...args, (err,data) => {
            if(err) return this.emit('error',err);
        
        this.emit('data', data);
        console.timeEnd('executing');
        this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));

withTime.on('end', () => console.log('Done with execute'));

// withTime.execute( () => console.log('*** Executing task ***'));

withTime.execute(fs.readFile,__filename);
