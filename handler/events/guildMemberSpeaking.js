client.on("guildMemberSpeaking", function(member, speaking){
    console.log(`a guild member starts/stops speaking: ${member.tag}`);
});