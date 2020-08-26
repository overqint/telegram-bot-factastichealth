console.log("start app")
const Telegraf = require('telegraf')
//const commandArgsMiddleware = require('./commandArgs')

var message = require('./text.js');


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(message.welcome_message))
bot.help((ctx) => ctx.reply(message.commands_message))
//bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Whats this all about', (ctx) => ctx.reply(message.whats_this_all_about_message))
bot.hears('Auto Immune Daily Plan Start', (ctx) => ctx.reply(message.autoimmune_daily_plan_day1_message))

bot.hears('/1', (ctx) => ctx.reply(message.whats_this_all_about_message))
bot.hears('/2', (ctx) => ctx.reply(message.autoimmune_daily_plan_day1_message))

//bot.use(commandArgsMiddleware())
//bot.hears('/start', ctx => ctx.reply('Let there be light'))
const commandParts = require('./telegraf-command-parts');

//parse commands
/*
bot.use(commandParts());
bot.command('/start', ctx => {
    console.log(ctx.state.command) // command object
    if(ctx.state.command.args[1] === "displayWelcome"){
        ctx.reply('Display Help')
    }
})
*/

//read from file
/*
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
*/
bot.launch()

//https://telegram.me/s1refbot?start=novem324234
