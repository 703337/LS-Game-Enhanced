// All code for interaction buttons goes here



// Selections
$(document).on("click", "#SelectBtn", function(){
    // Set values based on what menu is currently selected (check if select element returns a defined value)
    if ($("#CharSelector").val() != undefined) {
        // Set character
        player.char.name = $("#CharSelector").val();

        // Set character stats
        setStats(player.char.name);
    }
    else if ($("#ClothSelector").val() != undefined) {
        // Set clothing
        player.cloth.name = $("#ClothSelector").val();

        // Set clothing stats
        setStats(player.cloth.name);
    }
    else if ($("#WeapSelector").val() != undefined) {
        // Set weapon
        player.weap.name = $("#WeapSelector").val();

        // Set weapon stats
        setStats(player.weap.name);
    }
});



// Function to set stats in the player data based on the specified selection of character/clothing/weapon
function setStats(selection) {
    // Set stats based on 'selection' value
    switch (selection) {
        // Characters
        // Citizen
        case "Citizen":
            player.char.healthMax = 100;
            player.char.damage = 10;
            player.char.dodgeChance = 5;
        break;

        // Thief
        case "Thief":
            player.char.healthMax = 85;
            player.char.damage = 7;
            player.char.dodgeChance = 7;
        break;

        // Chef
        case "Chef":
            player.char.healthMax = 110;
            player.char.damage = 13;
            player.char.dodgeChance = 5;
        break;

        // B47RY-H3D
        case "B47RY-H3D":
            player.char.healthMax = 90;
            player.char.damage = 15;
            player.char.dodgeChance = 2;
        break;
        
        // Clothing
        // Nude
        case "Nude":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0;
            player.cloth.dodgeChanceMult = 2;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            player.cloth.bleedChance = 0;
            player.cloth.stunChance = 0;
        break;

        // Thieves' Cloak
        case "Thieves' Cloak":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0.02;
            player.cloth.dodgeChanceMult = 1.25;
            player.cloth.multiHitChance = 0.05;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            player.cloth.bleedChance = 0;
            player.cloth.stunChance = 0;
        break;

        // Chefswear
        case "Chefswear":
            player.cloth.healthMult = 1.1;
            player.cloth.damageReduction = 0.03;
            player.cloth.dodgeChanceMult = 1.25;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            player.cloth.bleedChance = 0;
            player.cloth.stunChance = 0;
        break;

        // Shock Plating
        case "Shock Plating":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0;
            player.cloth.dodgeChanceMult = 1;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0.5;
            player.cloth.blockDamageChance = 3;
            player.cloth.bleedChance = 0;
            player.cloth.stunChance = 5;
        break;

        // Weapons
        // Fists
        case "Fists":
            player.weap.damageMult = 1;
            player.weap.dodgeChanceMult = 1.5;
            player.weap.hitChance = 90;
            player.weap.critChance = 2;
            player.weap.soulHitChance = 0;
            player.weap.soulCritChance = 0;
            player.weap.experienceMult = 1;
            player.weap.bleedChance = 0;
            player.weap.stunChance = 0;
        break;

        // Pocket Knife
        case "Pocket Knife":
            player.weap.damageMult = 1.1;
            player.weap.dodgeChanceMult = 1;
            player.weap.hitChance = 85;
            player.weap.critChance = 8;
            player.weap.soulHitChance = 0;
            player.weap.soulCritChance = 0;
            player.weap.experienceMult = 1.2;
            player.weap.bleedChance = 0;
            player.weap.stunChance = 0;
        break;

        // Cleaver
        case "Cleaver":
            player.weap.damageMult = 1.45;
            player.weap.dodgeChanceMult = 1;
            player.weap.hitChance = 65;
            player.weap.critChance = 8;
            player.weap.soulHitChance = 0;
            player.weap.soulCritChance = 0;
            player.weap.experienceMult = 1;
            player.weap.bleedChance = 3;
            player.weap.stunChance = 0;
        break;

        // Butter Knife
        case "Butter Knife":
            player.weap.damageMult = 2;
            player.weap.dodgeChanceMult = 1;
            player.weap.hitChance = 50;
            player.weap.critChance = 25;
            player.weap.soulHitChance = 0;
            player.weap.soulCritChance = 0;
            player.weap.experienceMult = 1;
            player.weap.bleedChance = 8;
            player.weap.stunChance = 0;
        break;
    }

    // Set 'player.char.healthMax' and 'player.char.health'
    player.char.healthMax *= player.cloth.healthMult;
    player.char.health = player.char.healthMax;
}



// Function to set up the game when started by the player
$(document).on("click", "#StartBtn", function(){
    // Roll Prefixes
    rollPrefix("weapon", player.weap.name);
    rollPrefix("clothing", player.cloth.name);

    // Prevent function execution if an error occurs
    switch (error) {
        case "prefixRoll.js: InvalidWeap", "prefixRoll.js: InvalidCloth":
            return;
    }

    // Set Save Data
    localStorage.setItem('playerSaveData', JSON.stringify(player));

    // Set New Nav Buttons Text
    $("#MainBtn1").html('Fight');
    $("#MainBtn2").html('Story');
    $("#MainBtn3").html('Stats');
    $("#MainBtn4").html('Merchant');

    // Set Menu Name and Description
    $("#MenuHeader").html('Data saved!');
    $("#MenuDescription").html('Your data is only available on your current device and is stored in the browser\'s local storage.');

    // Set Submenu Buttons
    $("#SubMenuBtns").html('');

    // Set Menu Content
    $("#MenuContent").html('All menus currently unavailable.');

    // Set Interact Buttons
    $("#InteractBtns").html('');
});
// Trigger via keypress
$(document).keypress(function(){
    if (event.key == "5") {
        $("#SelectBtn").click();
        $("#StartBtn").click();
        // Alert player to successful interaction for selection menus
        if ($("#SelectBtn").html() == "Select") {
            alert('Selection Successful')
        }
    }
});



// General Settings
$(document).on("click", "#GeneralSettingsBtn", function(){
    // Set Menu Content
    $("#MenuContent").html(
        '<p>Display Mode: <button id="GeneralSettingsStyleToggleBtn">' + settings.displayMode + '</button></p>'
    );

    // Set Interact Buttons
    $("#InteractBtns").html('');
});
// Toggle the site between light and dark site styles
$(document).on("click", "#GeneralSettingsStyleToggleBtn", function(){
    // Change site style (displayMode) between Light and Dark and save the change
    switch (settings.displayMode) {
        // Set Dark Style
        case "Light":
            settings.displayMode = "Dark";
            $("#Stylesheet").attr("href", "styles/darkstyle.css");
            localStorage.setItem('settingsData', JSON.stringify(settings));
        break;

        //  Set Light Style
        case "Dark":
            settings.displayMode = "Light";
            $("#Stylesheet").attr("href", "styles/lightstyle.css");
            localStorage.setItem('settingsData', JSON.stringify(settings));
        break;
    }

    // Set Menu Content
    $("#MenuContent").html(
        '<p>Display Mode: <button id="GeneralSettingsStyleToggleBtn">' + settings.displayMode + '</button></p>'
    );
});



// Data Settings
$(document).on("click", "#DataSettingsBtn", function(){
    // Set Menu Content
    $("#MenuContent").html(
        '<p>Player Data: <button id="DataSettingsPlayerDataBtn">Clear</button></p>'
    );
});
// Erase the player's data
$(document).on("click", "#DataSettingsPlayerDataBtn", function(){
    // Ask the player to confirm their decision
    confirm("Are you sure you want to do this?");
    
    // Act upon player choice if player choice is "Ok"
    if (confirm) {
        // Delete player save data and reload the page
        localStorage.removeItem("playerSaveData");
        location.reload();
    }
});