const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'server-info',
	description: 'Deatails about the server',
	aliases: '[sinfo]',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = new Discord.RichEmbed()
		.setTitle("Server Info")
		.setColor(81, 52, 97)
		.setDescription("PhantomDEV is a Graphical Customization and Development Community hosted in Discord. We cater to all Operating Systems and are open to pretty much everyone.")
		.setFooter("PhantomGuard", "https://i.imgur.com/JS8KM4G.png")
		.setImage("https://i.imgur.com/hcl4czH.png")
		.setThumbnail("https://i.imgur.com/R0jbjOs.png")
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
