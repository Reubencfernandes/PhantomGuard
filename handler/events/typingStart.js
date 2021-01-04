client.on("typingStart", function(channel, user){
    console.log(`${user.tag} has started typing`);
});