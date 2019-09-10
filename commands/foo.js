const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'foo',
	aliases: '[f]',
	cooldown: 5,
	execute(message) {
		message.channel.send('bar');
	},
};