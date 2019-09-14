const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'argsinfo',
	description: 'Information about the arguments provided.',
	aliases: ['args', 'ainfo', 'ai'],
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};