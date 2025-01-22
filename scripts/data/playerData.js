// All code for player and settings data goes here
// Code for settings data is included due to previously being contained within the player data



// Prevent code from running before full page load
$(function(){
    // Check for settings data
    settingsData = JSON.parse(localStorage.getItem("settingsData"));

    // Load saved settings data (if any) and apply changes
    if (settingsData != null) {
        // Load Saved Data
        settings = JSON.parse(localStorage.getItem("settingsData"));
        // Apply Chosen Style (displayMode)
        $("#Stylesheet").attr("href", "styles/"+ settings.displayMode.toLowerCase() + "style.css");
    }
    // Otherwise set default settings data
    else {
        // Set initial settings values
        settings = {
            displayMode: "Light"
        }
    }



    // Check for saved player data
    player = JSON.parse(localStorage.getItem("playerSaveData"));
    
    // Load saved player data (if any) and apply changes
    if (player != null) {
        // Set Nav Buttons Text
        $("#MainBtn1").html("Fight");
        $("#MainBtn2").html("Story");
        $("#MainBtn3").html("Stats");
        $("#MainBtn4").html("Merchant");

        // Set Menu Name and Description
        $("#MenuHeader").html("Welcome Back to LS Game Enhanced!");
        $("#MenuDescription").html("Select a menu to continue. Only Stats and Merchant are available, although Merchant's functionality is currently unimplemented.");

        // Set Submenu Buttons
        $("#SubMenuBtns").html("");

        // Set Menu Content
        $("#MenuContent").html("All menus currently unavailable.");

        // Set Interact Buttons
        $("#InteractBtns").html("");
    }
    // Otherwise set default player data
    else {
        // Set initial player data values
        player = {
            // Character
            char: {
                name: "NULL",
                healthMax: 100,
                health: 100,
                damage: 10,
                dodgeChance: 5
            },
            // Clothing
            cloth: {
                name: "Whitespace",
                prefix: "",
                healthMult: 1,
                damageReduction: 0.1,
                dodgeChanceMult: 1.1,
                multiHitChance: 0,
                mirrorDamageMult: 0,
                blockDamageChance: 0,
                bleedChance: 0,
                stunChance: 0
            },
            // Weapon
            weap: {
                name: "Maw",
                prefix: "",
                damageMult: 1,
                dodgeChanceMult: 1,
                hitChance: 90,
                critChance: 5,
                soulHitChance: 0,
                soulCritChance: 0,
                experienceMult: 1,
                bleedChance: 10,
                stunChance: 0
            },
            // Other
            area: "Test",
            experience: 0,
            currency: 0,
            hasShield: false,
            isBleeding: false,
            isStunned: false
        }

        // Set 'player.char.healthMax' and 'player.char.health'
        player.char.healthMax *= player.cloth.healthMult;
        player.char.health = player.char.healthMax;
    }
});