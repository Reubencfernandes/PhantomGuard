const { prefix } = require('../config.json');
const Discord = require('discord.js');


module.exports = {
	name: 'beep',
	description: 'Beep!',
	aliases: '[b]',
	cooldown: 5,
	execute(message) {
		message.channel.send('Boop.');
	},
};