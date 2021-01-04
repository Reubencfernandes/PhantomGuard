client.on("resume", function(replayed){
    console.log(`whenever a WebSocket resumes, ${replayed} replays`);
});