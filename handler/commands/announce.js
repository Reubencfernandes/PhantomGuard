const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'announce',
    description: 'Send an announcement to the specified channel.',
    aliases: '[ann]',
    cooldown: 5,
    guildOnly: true,
    execute(message) {
				if(command === 'annnounce') {
					let channel = message.mentions.channels.first();
					let announcement = args.slice(1).join(" ");
					
					channel.send(announcement);
				}
}};