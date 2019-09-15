const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'announce',
    description: 'Send an announcement to the specified channel.',
    aliases: '[ann]',
    cooldown: 5,
    guildOnly: true,
	execute: function(message, args) {
				if(message.member.roles.find("name", "Moderator")){
					if (args.length < 2) return /* error message */;
					
					// Careful using this; if just an announcement is provided
					// and it mentions a channel, that channel will be used.
					let channel = message.mentions.channels.first();
					if (!channel) return /* error message */;
					
					let announcement = args.slice(1).join(" ");
					
					channel.send(announcement)
					.catch(console.error);
				}
}};
					