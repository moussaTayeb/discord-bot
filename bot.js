const TOKEN = process.env.TOKEN
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', ()=>{
    console.log(client.user.tag)
})

client.on('message', msg =>{
    if(msg.content.toLowerCase() === 'hello'){
        msg.reply(`${msg.author} World!`)
    }

    if(msg.channel.id === '985288693189328997'){
        client.channels.cache.get('985273790592319552').send({ content: `${client.user.tag} shared ressource, check it out` });
    }
})

client.login(TOKEN)