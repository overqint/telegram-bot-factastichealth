console.log("start app")
const Telegraf = require('telegraf')
//const commandArgsMiddleware = require('./commandArgs')

//const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Telegraf("818306293:AAFuLeKQxJNofoCiNhHaGC3t-DW0KL7G4zU");
//bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
//bot.use(commandArgsMiddleware())
//bot.hears('/start', ctx => ctx.reply('Let there be light'))
const commandParts = require('./telegraf-command-parts');

bot.use(commandParts());
bot.command('/start', ctx => {
    console.log(ctx.state.command) // command object
    if(ctx.state.command.args[1] === "displayWelcome"){
        ctx.reply('Novem Welcomes You')
    }
})
bot.hears('joingroup', (ctx) => ctx.reply('Hey there'))


bot.launch()

//https://telegram.me/s1refbot?start=novem324234