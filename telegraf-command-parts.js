const { mount } = require('telegraf');


/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = () => mount('text', (ctx, next) => {
    console.log("Args")


    const text = ctx.message.text.toLowerCase()
    if (text.startsWith('/start')) {

        const match = text.match(/^\/([^\s]+)\s?(.+)?/)
        let args = []
        let command
        if (match !== null) {
            if (match[1]) {
                command = match[1]
            }
            if (match[2]) {
                args = match[2].split(' ')
            }
        }


        if(args[0] === "novem324234"){
            console.log("You got referenced by "+args[0])
            args[1] = "displayWelcome"
        }

        let finalcomand = {
            raw: text,
            command,
            args
        }

        ctx.state.command = finalcomand;
        //console.log(ctx.state.command)

    }


    return next();
});