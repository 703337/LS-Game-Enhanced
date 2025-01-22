// All code for audio control goes here

// TODO:
// - Add error codes like with prefixRoll.js
// - Test playing the same audio file while already playing
// - Add TestSong.mp3 and make sure it works

// Function to control audio of a specified type (music/sfx) and name with a specified action (for music)
function audioControl(type, name, action) {
    // Check which type of audio to control
    switch (type) {
        // Control Music
        case "music":
            // TestSong
            case "TestSong":
                // Check which action to perform
                switch (action) {
                    // Play
                    case "play":
                        $("#MusicPlayer").attr("src", "audio/music/TestSong.mp3");
                        $("#MusicPlayer").get(0).play();
                    break;

                    // Pause
                    case "pause":
                        $("#MusicPlayer").attr("src", "audio/music/TestSong.mp3");
                        $("#MusicPlayer").get(0).pause();
                    break;
                }
            break;
        break;

        // Control SFX
        case "sfx":
            switch (name) {
                // PhoneCallHi
                case "PhoneCallHi":
                    $("#SFXPlayer").attr("src", "audio/sfx/PhoneCallHi.wav");
                    $("#SFXPlayer").get(0).play();
                break;
            }
        break;
    }
}