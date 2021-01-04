const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Deatails about the server',
	aliases: ['server', 'sinfo', 'si'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Server Info")
		.setColor(81, 52, 97)
		.setDescription("PhantomDEV is a Graphical Customization and Development Community hosted in Discord. We cater to all Operating Systems and are open to pretty much everyone.")
		.setFooter("PhantomGuard", "https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setImage("https://cdn.discordapp.com/attachments/600463516046065696/620896872302641152/banner.PNG")
		.setThumbnail("https://cdn.discordapp.com/attachments/600463516046065696/620986337398489089/avatar.png")
		.setTimestamp()
		.setURL("https://auttaja.io/PhantomDEV")
		.addField("Founder", "Nimbi#4961",)
		.addField("Owners",
		"Nimbi#4961, masstransithonchkrow#7723", true)
		.addBlankField(true)
		.addField("Website", "https://phantomdev.enjin.com", true)
		.addField("Server Invite", "https://auttaja.io/PhantomDEV");
		
	message.channel.send({embed});
}};
