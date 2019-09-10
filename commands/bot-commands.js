const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'bot-commands',
	description: 'Provides a list of all bot commands',
	aliases: '[bcommands]',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Bot Commands")
		.setColor(81, 52, 97)
		.setDescription("PhantomGuard\'s commands.")
		.setFooter("PhantomGuard", "https://i.imgur.com/JS8KM4G.png")
		.setImage("https://i.imgur.com/hcl4czH.png")
		.setThumbnail("https://i.imgur.com/R0jbjOs.png")
		.setTimestamp()
		.setURL("https://auttaja.io/PhantomDEV")
		.addBlankField(true)
		.addField("Admin",
		"No Admin Commands at the moment", true)
		.addField("Mod",
		"kick, prune", true)
		.addField("Info",
		"user-info, bot-info, server-info, args-info", true)
		.addField("Help",
		"help, bot-commands", true)
		.addField("Utility", 
		"ping, beep, foo, avatar", true)
		.addBlankField(true)
		.addField("Planned",
		"ban, unban, tempBan, addRole, delRole, role, Gatekeeper, shutdown, restart, report, feedback, uptime, search", true);
		
	message.channel.send({embed});
}};