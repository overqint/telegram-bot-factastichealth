const commandArgs = () => (ctx, next) => {
    console.log("commandArgs")
    if (ctx.updateType === 'message' && ctx.updateSubTypes[0] === 'text') {
        //console.log("test1")
        const text = ctx.update.message.text.toLowerCase()

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

            ctx.state.command = {
                raw: text,
                command,
                args
            }
            if(args[0] === "novem324234"){

            }
            console.log(ctx.state.command)
        }
    }
    return next()
}

module.exports = commandArgs