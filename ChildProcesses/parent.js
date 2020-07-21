// const { fork } = require('child_process');

// const forked = fork('child.js');

// forked.on('message', (msg) => {
//     console.log(`Message from child`, msg);
// });

// forked.send({hello: 'world'});

/**Trying Out MY Parent-child Script 
 * for Usage */
const child = require('child_process');

// child.fork('script.js');
const childForked = child.fork('script.js');

childForked.on('message', (msg) => {
    console.log(`With pleasure we have`, msg);
});

childForked.send({Yourgrab: 'World'});
