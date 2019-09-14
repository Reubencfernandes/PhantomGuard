const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'userinfo',
	description: 'User Details',
	aliases: ['user', 'uinfo', 'ui'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("User Info")
		.setColor(81, 52, 97)
		.setDescription(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
		.setFooter("PhantomGuard", "https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setThumbnail("https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setTimestamp()
		.addBlankField(true)
		.setURL("https://auttaja.io/PhantomDEV")
		
	message.channel.send({embed});
}};