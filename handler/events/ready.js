client.on("ready", function(){
	console.log(`the client becomes ready to start`);
	console.log(`I am ready! Logged in as ${client.user.tag}!`);
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

			client.user.setActivity("with Node.JS");
			client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
			
			.then(link => {
				console.log(`Generated bot invite link: ${link}`);
				inviteLink = link;
})
});