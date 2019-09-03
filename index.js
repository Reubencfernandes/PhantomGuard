require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('ready', () => {    
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)        
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})

client.on('ready', () => {
    var generalChannel = client.channels.get("383746228443152384")
    generalChannel.send("I have arrived!")  
})

client.on('ready', () => {
    var generalChannel = client.channels.get("383746228443152384")      
    const localFileAttachment = new Discord.Attachment('Banner.PNG')
    generalChannel.send(localFileAttachment)
})

client.on('ready', () => {    
    client.user.setActivity("with Javascript", {type: "PLAYING"})
})

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!')
  } else if (msg.content === '!beep') {
	  msg.reply('Boop!')
  }
})

client.on('message', (receivedMessage) => {    
    if (receivedMessage.author == client.user) {
        return
	} 
    
    if (receivedMessage.content.includes(client.user.toString())) {
        receivedMessage.channel.send("My Prefix is !" )
    }
})

client.on('message', message => {
  if (message.content.startsWith('!kick')) {
    const member = message.mentions.members.first()
	
    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
})

client.login(process.env.BOT_TOKEN)