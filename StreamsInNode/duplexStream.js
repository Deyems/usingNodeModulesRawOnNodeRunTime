const {Duplex} = require('stream');

const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
    }
})