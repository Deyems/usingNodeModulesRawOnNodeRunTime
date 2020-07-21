
process.on('message', (msg) => {
    console.log(`Do something with Parent's`, msg);
});

let counter = 0;

setInterval(() => {
    process.send({counter: counter++});
}, 1000);

// while(counter < 4){
//     process.send({counter: counter++});
// }

