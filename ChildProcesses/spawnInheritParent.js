const { spawn } = require('child_process');

//Shell mode
// const child = spawn('find', ['.', '-type', 'f'], {
//     stdio: 'inherit',
//     shell: true
// });

//Different cwd
// const child = spawn('find . -type f | wc -l', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '/Users/decagon/Documents/NodeLearningPoint'
// });

//Specifying Environment Variables
// const child = spawn('echo $HOME', {
//     stdio: 'inherit',
//     shell: true,
//     env: {HOME: 30}
// });

/**Makes the spawn not to haveany 
 * value printed to the command line
 */
// const child = spawn('echo $HOME', {
//     stdio: 'inherit',
//     shell: true,
//     env: {}
// });

//Detached Option
//Makes the child run independently
const child = spawn('node', ['timer.js'],{
    detached: true,
    stdio: 'ignore'
});

child.unref();

//We then make use of the following 
//command to see how it is running 
//in the background

//ps -ef | grep timer