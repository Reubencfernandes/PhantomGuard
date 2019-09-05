module.exports = {
	name: 'foo',
	description: 'Foo!',
	execute(message) {
		message.channel.send('Bar!');
	},
};
