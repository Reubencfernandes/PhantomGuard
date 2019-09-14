const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'botinfo',
	description: 'Deatails about the server',
	aliases: ['bot', 'binfo', 'bi'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Bot Info")
		.setDescription("Private Moderation bot built and managed by PhantomDEV")
		.setAuthor("Ninbi#4961")
		.setColor(81, 52, 97)		
		.setFooter("PhantomGuard", "https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setImage("https://cdn.discordapp.com/attachments/600463516046065696/620986729939075115/banner.png")
		.setThumbnail("https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setTimestamp()
		.setURL("https://auttaja.io/PhantomDEV")
		.addBlankField(true)
		.addField("Website", "https://phantomdev.enjin.com", true)
		.addField("Server Invite", "https://auttaja.io/PhantomDEV");
		
	message.channel.send({embed});
}};