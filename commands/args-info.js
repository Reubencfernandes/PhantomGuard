const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	aliases: '[ainfo]',
	cooldown: 5,
	args: true,
	execute(message, args) {
		message.channel.send(`First argument: ${args[0]}`);
	},
};
