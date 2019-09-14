const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	cooldown: 5,
	execute(message) {
		message.channel.send('Pong!');
	},
};