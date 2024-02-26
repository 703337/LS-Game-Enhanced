// All code for interaction buttons goes here
// Selections
$(document).on("click", "#SelectBtn", function(){
    // Set values based on what menu is currently selected (check if select element returns a defined value)
    if ($("#CharSelector").val() != undefined) {
        player.char.name = $("#CharSelector").val();
        // Set character stats
        setStats(player.char.name);
    }
    else if ($("#ClothSelector").val() != undefined) {
        player.cloth.name = $("#ClothSelector").val();
        // Set clothing stats
        setStats(player.cloth.name);
    }
    else if ($("#WeapSelector").val() != undefined) {
        player.weap.name = $("#WeapSelector").val();
        // Set weapon stats
        setStats(player.weap.name);
    }
});

// Selections stat setting function
function setStats(selection) {
    // Set stats based on 'selection' value
    switch (selection) {
        // Characters
        case "Citizen":
            player.char.healthMax = 100;
            player.char.damage = 10;
            player.char.dodgeChance = 5;
            break;
        case "Thief":
            player.char.healthMax = 85;
            player.char.damage = 7;
            player.char.dodgeChance = 7;
            break;
        case "Chef":
            player.char.healthMax = 110;
            player.char.damage = 13;
            player.char.dodgeChance = 5;
            break;
        case "B47RY-H3D":
            player.char.healthMax = 90;
            player.char.damage = 15;
            player.char.dodgeChance = 2;
            break;
        // Clothing
        case "Nude":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0;
            player.cloth.dodgeChanceMult = 2;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            break;
        case "Thieves' Cloak":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0.02;
            player.cloth.dodgeChanceMult = 1.25;
            player.cloth.multiHitChance = 0.05;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            break;
        case "Chefswear":
            player.cloth.healthMult = 1.1;
            player.cloth.damageReduction = 0.03;
            player.cloth.dodgeChanceMult = 1.25;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0;
            player.cloth.blockDamageChance = 0;
            break;
        case "Shock Plating":
            player.cloth.healthMult = 1;
            player.cloth.damageReduction = 0;
            player.cloth.dodgeChanceMult = 1;
            player.cloth.multiHitChance = 0;
            player.cloth.mirrorDamageMult = 0.5;
            player.cloth.blockDamageChance = 3;
            break;
        // Weapons
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

// Game Start
$(document).on("click", "#StartBtn", function(){
    // Set Save Data
    localStorage.setItem("playerSaveData", JSON.stringify(player));
    localStorage.setItem("saveData", "yep");
    // Set New Nav Buttons Text
    $("#MainBtn1").html("Fight");
    $("#MainBtn2").html("Story");
    $("#MainBtn3").html("Stats");
    $("#MainBtn4").html("Merchant");
    // Set Menu Name and Description
    $("#MenuHeader").html("Data saved!");
    $("#MenuDescription").html("Your data is only available on your current device and is stored in the browser's local storage.");
    // Set Submenu Buttons
    $("#SubMenuBtns").html("");
    // Set Menu Content
    $("#MenuContent").html("All menus currently unavailable.");
    // Set Interact Buttons
    $("#InteractBtns").html("");
});