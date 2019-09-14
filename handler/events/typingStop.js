client.on("typingStop", function(channel, user){
    console.log(`${user.tag} has stopped typing`);
});