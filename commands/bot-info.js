const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'bot-info',
	description: 'Deatails about the server',
	usage: '[command name]',
	cooldown: '[5]',
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Bot Info")
		.setDescription("Private Moderation bot built and managed by PhantomDEV")
		.setAuthor("Ninbi#4961")
		.setColor(81, 52, 97)		
		.setFooter("PhantomGuard", "https://i.imgur.com/JS8KM4G.png")
		.setImage("https://i.imgur.com/dorYTQT.png")
		.setThumbnail("https://i.imgur.com/JS8KM4G.png")
		.setTimestamp()
		.setURL("https://auttaja.io/PhantomDEV")
		.addBlankField(true)
		.addField("Website", "https://phantomdev.enjin.com", true)
		.addField("Server Invite", "https://auttaja.io/PhantomDEV");
		
	message.channel.send({embed});
}};