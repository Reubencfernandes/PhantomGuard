const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'commands',
	description: 'Provides a list of all bot commands',
	aliases: '[c]',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Bot Commands")
		.setColor(81, 52, 97)
		.setDescription("PhantomGuard\'s commands.")
		.setFooter("PhantomGuard", "https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setImage("https://cdn.discordapp.com/attachments/600463516046065696/620896872302641152/banner.PNG")
		.setThumbnail("https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setTimestamp()
		.setURL("https://auttaja.io/PhantomDEV")
		.addBlankField(true)
		.addField("Admin",
		"kick", true)
		.addField("Mod",
		"forceprune, announce", true)
		.addField("Helper",
		"prune", true)
		.addField("Info",
		"userinfo, botinfo, serverinfo, argsinfo", true)
		.addField("Help",
		"help, commands", true)
		.addField("Utility", 
		"ping, beep, avatar", true)
		.addBlankField(true)
		.addField("Planned",
		"ban, unban, tempBan, addRole, delRole, role, Gatekeeper, shutdown, restart, report, feedback, uptime, search", true);
		
	message.channel.send({embed});
}};