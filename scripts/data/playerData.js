// All code for player data goes here
// Set initial values
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
        healthMult: 1,
        damageReduction: 0.1,
        dodgeChanceMult: 1.1,
        multiHitChance: 0,
        mirrorDamageMult: 0,
        blockDamageChance: 0
    },
    // Weapon
    weap: {
        name: "Maw",
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

// Check for saved data
saveData = localStorage.getItem("saveData");

// Prevent function from running before full page load
$(function(){
// Load saved data (if any) and apply changes
if (saveData != null) {
    // Load Saved Data
    player = JSON.parse(localStorage.getItem("playerSaveData"));
    // Set Nav Buttons Text
    $("#MainBtn1").html("Fight");
    $("#MainBtn2").html("Story");
    $("#MainBtn3").html("Stats");
    $("#MainBtn4").html("Merchant");
    // Set Menu Name and Description
    $("#MenuHeader").html("Welcome Back to LS Game Enhanced!");
    $("#MenuDescription").html("Select a menu to continue.");
    // Set Submenu Buttons
    $("#SubMenuBtns").html("");
    // Set Menu Content
    $("#MenuContent").html("All menus currently unavailable.");
    // Set Interact Buttons
    $("#InteractBtns").html("");
}
});