const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'user-info',
	description: 'User Details',
	usage: '[command name]',
	cooldown: '[5]',
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("User Info")
		.setColor(81, 52, 97)
		.setDescription(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
		.setFooter("PhantomGuard", "https://i.imgur.com/JS8KM4G.png")
		.setThumbnail("https://i.imgur.com/R0jbjOs.png")
		.setTimestamp()
				.addBlankField(true)
		.setURL("https://auttaja.io/PhantomDEV")
		
	message.channel.send({embed});
}};