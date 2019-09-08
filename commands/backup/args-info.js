const Discord = require("discord.js");
const prefix="!";
exports.argsinfo(client,message)=> {
if(message.content.startsWith(prefix+"argslength")
   {
       let args = message.content.split(' ').slice(1);
       let text = args.join(' ');
	message.channel.send(text.length);

   }

}

