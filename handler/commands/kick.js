const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick the tagged user from the server.',
    aliases: '[k]',
    cooldown: 5,
    guildOnly: true,
    execute(message) {
        if(message.member.roles.find("name", "Administrator")){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }

        const taggedUser = message.mentions.users.first();
        if(taggedUser.kickable){ 
        taggedUser.kick()
        .then(() => console.log(`Kicked ${member.displayName}`))
        }       
        message.channel.send(`You have kicked: ${taggedUser.username}`);
        }else{
            message.channel.send(`Access Denied`);
    }
}};