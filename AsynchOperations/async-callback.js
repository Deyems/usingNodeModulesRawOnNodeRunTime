// const fs = require('fs');

// const readFileAsArray = function (file, cb){
//     fs.readFile(file, function(err,data){
//         if(err) return cb(err);
//         const lines = data.toString().trim().split('\n');
//         cb(null, lines);
//     });
// };

// readFileAsArray('./numbers',(err,lines) => {
//     if(err) throw err;
//     const numbers = lines.map(Number);
//     const oddNumbers = numbers.filter(number => number % 2 === 1);
//     console.log('odd numbers count:', oddNumbers.length);
// });

//CHANGING THE CALLBACKS TO PROMISES GIVES
//THE CODE BELOW:
/*
const fs = require('fs');
const readFileAsArray = function (file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err,data){
            if(err) return reject(err);
            
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
     });
}

readFileAsArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count:', oddNumbers.length);
    })
    .catch(console.error);
*/

//Further More We can still even leave our
//Callbacks and make it have the Promise 
//Interface. WHICH IS SHOWN BELOW:

/*
const fs = require('fs');
const readFileAsArray = function (file, cb = () => {}){
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err,data){
            if(err) {
                reject(err);
                return cb(err);
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        });
    });
}

readFileAsArray('./numbers')
    .then(lines => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count:', oddNumbers.length);
    })
    .catch(console.error);
*/


//HOW ABOUT MAKING OUR CODE IN FORM OF 
//ASYNCHRONOUS AWAIT AND ASYNC

const fs = require('fs');
const readFileAsArray = function (file, cb = () => {}){
    return new Promise((resolve, reject) => {
        fs.readFile(file, function(err,data){
            if(err) {
                reject(err);
                return cb(err);
            }
            console.log(data.toString());
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        });
    });
}

async function countOdd(){
    try{
        const lines = await readFileAsArray('./numbers');
        console.log(lines);
        const numbers = lines.map(Number);
        console.log(numbers);
        const oddCount = numbers.filter(number => number % 2 === 1).length;
        console.log('odd numbers count:', oddCount);
    } catch(err){
        console.error(err);
    }
}

countOdd();