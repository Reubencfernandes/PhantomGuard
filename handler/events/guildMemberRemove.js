client.on("guildMemberRemove", function(member){
    console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
});