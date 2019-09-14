const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'prune',
	description: 'Prune up to 99 messages.',
	aliases: ['purge', 'p'],
	execute(message, args) {
		if(message.member.roles.find("name", "Helper")){
			const amount = parseInt(args[0]) + 1;
			if (isNaN(amount)) {
				return message.reply('that doesn\'t seem to be a valid number.');
				
				} else if (amount <= 1 || amount > 100) {
					return message.reply('you need to input a number between 1 and 99.');
				}
				
				message.channel.fetchMessages({ limit: amount })
				.then(fetchedMessages => {
					const messagesToPrune = fetchedMessages.filter(msg => !msg.pinned);
					return message.channel.bulkDelete(messagesToPrune, true);
					})
					.then(prunedMessages => {
						message.channel.send(`Deleted ${prunedMessages} message${prunedMessages !== 1 ? 's' : ''}.`);
						})
						.catch(console.error);
		}
}};