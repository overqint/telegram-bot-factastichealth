const { mount } = require('telegraf');


/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = () => mount('text', (ctx, next) => {
    console.log("Args")


    const readline = require('readline');
    const fs = require('fs');
    const readInterface = readline.createInterface({
        input: fs.createReadStream('./text.js'),
        //output: process.stdout,
        console: false
    });
    readInterface.on('line', function(line) {
        console.log(line);
    });


    return next();
});