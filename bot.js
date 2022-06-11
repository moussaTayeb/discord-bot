const TOKEN = "OTg1Mjc0MTQ5MTIxNDMzNjkw.Gp_bR_.Ear2f3H_2DAQ4CMf4heZzF6Rr-tCTUouHVSXws"
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', ()=>{
    console.log(client.user.tag)
})

client.on('message', msg =>{
    if(msg.content.toLowerCase() === 'hello'){
        msg.reply(`${msg.author} World!`)
    }
})

client.login(TOKEN)