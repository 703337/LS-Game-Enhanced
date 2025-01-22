// All code for Select elements goes here



// Character Selection
$(document).on("change", "#CharSelector", function(){
    // Display Selected Character Stats
    switch ($("#CharSelector").val()) {
        // Display Citizen Stats
        case "Citizen":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 100</p>'+
                '<p><b>Damage:</b> 10</p>'+
                '<p><b>Dodge Chance:</b> 5%</p>'+
                '<h3>Curse: Painfully Average</h3>'+
                '<p>Take a small amount of damage when missing.</p>'
            );
        break;

        // Display Thief Stats
        case "Thief":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 85</p>'+
                '<p><b>Damage:</b> 7</p>'+
                '<p><b>Dodge Chance:</b> 7%</p>'+
                '<h3>Curse: Heavy Pockets</h3>'+
                '<p>Hit and dodge chances decrease the more [currency] you have.</p>'
            );
        break;

        // Display Chef Stats
        case "Chef":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 110</p>'+
                '<p><b>Damage:</b> 13</p>'+
                '<p><b>Dodge Chance:</b> 5%</p>'+
                '<h3>Curse: Overstuffed</h3>'+
                '<p>Heal more from blocking but lose the ability to block more than once in a row.</p>'
            );
        break;

        // Display B47RY-H3D Stats
        case "B47RY-H3D":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 90</p>'+
                '<p><b>Damage:</b> 15</p>'+
                '<p><b>Dodge Chance:</b> 2%</p>'+
                '<h3>Curse: Instability</h3>'+
                '<p>Slowly increase damage and damage reduction when not blocking but begin taking increasing damage after 4 turns.</p>'
            );
        break;
    }
});



// Clothing Selection
$(document).on("change", "#ClothSelector", function(){
    // Display Selected Clothing Stats
    switch ($("#ClothSelector").val()) {
        // Display Nude Stats
        case "Nude":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage Reduction:</b> 0%</p>'+
                '<p><b>Dodge Chance:</b> 2x</p>'
            );
        break;

        // Display Thieves' Cloack Stats
        case "Thieves' Cloak":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage Reduction:</b> 2%</p>'+
                '<p><b>Dodge Chance:</b> 1.25x</p>'+
                '<p><b>Multi Hit Chance:</b> 5%</p>'
            );
        break;

        // Display Chefswear Stats
        case "Chefswear":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Health:</b> 1.1x</p>'+
                '<p><b>Damage Reduction:</b> 3%</p>'+
                '<p><b>Dodge Chance:</b> 1.25x</p>'
            );
        break;

        // Display Shock Plating Stats
        case "Shock Plating":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage Reduction:</b> 5%</p>'+
                '<p><b>Dodge Chance:</b> 1x</p>'+
                '<p><b>Stun Chance:</b> 5%</p>'+
                '<h3>Curse: Flawed Design</h3>'+
                '<p>50% of damage taken is dealt to enemies, but blocking can damage you.</p>'
            );
        break;
    }
});



// Weapon Selection
$(document).on("change", "#WeapSelector", function(){
    // Displayed Selected Weapon Stats
    switch ($("#WeapSelector").val()) {
        // Display Fists Stats
        case "Fists":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage:</b> 1x</p>'+
                '<p><b>Dodge Chance:</b> 1.5x</p>'+
                '<p><b>Hit Chance:</b> 90%</p>'+
                '<p><b>Crit Chance:</b> 2%</p>'
            );
        break;

        // Display Pocket Knife Stats
        case "Pocket Knife":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage:</b> 1.1x</p>'+
                '<p><b>Dodge Chance:</b> 1x</p>'+
                '<p><b>Hit Chance:</b> 85</p>'+
                '<p><b>Crit Chance:</b> 8%</p>'+
                '<p><b>Experience Gain:</b> 1.2x</p>'
            );
        break;

        // Display Cleaver Stats
        case "Cleaver":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage:</b> 1.45x</p>'+
                '<p><b>Dodge Chance:</b> 1x</p>'+
                '<p><b>Hit Chance:</b> 65%</p>'+
                '<p><b>Crit Chance:</b> 8%</p>'+
                '<p><b>Bleed Chance:</b> 3%</p>'
            );
        break;

        // Display Butter Knife Stats
        case "Butter Knife":
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Damage:</b> 2x</p>'+
                '<p><b>Dodge Chance:</b> 1x</p>'+
                '<p><b>Hit Chance:</b> 50%</p>'+
                '<p><b>Crit Chance:</b> 25%</p>'+
                '<p><b>Bleed Chance:</b> 8%</p>'+
                '<h3>Curse: Butter Fingers</h3>'+
                '<p>Missing hits yourself. Ignores damage resistance and can crit.</p>'
            );
        break;
    }
});



// Start Menu
$(document).on("change", "#InfoSelector", function(){
    // Display Selected Information
    switch ($("#InfoSelector").val()) {
        // Display Chosen Character/Clothing/Weapon
        case "Selections":
            // Display Current Selections
            $("#MenuContent").html(
                '<h3>Current Selection:</h3>'+
                '<p id="ChosenChar"><b>Character:</b> ' + player.char + '</p>'+
                '<p id="ChosenCloth"><b>Clothing:</b> ' + player.cloth + '</p>'+
                '<p id="ChosenWeap"><b>Weapon:</b> ' + player.weap + '</p>'
            );

            // Ensure secret character/clothing/weapon does not display
            if (player.char.name == "NULL") {
                $("#ChosenChar").html("<b>Character:</b> -");
            }
            if (player.cloth.name == "Whitespace") {
                $("#ChosenCloth").html("<b>Clothing:</b> -");
            }
            if (player.weap.name == "Maw") {
                $("#ChosenWeap").html("<b>Weapon:</b> -");
            }
        break;

        // Display Base Stats of Chosen Character/Clothing/Weapon
        case "Base Stats":
            // Display Total Stats of Current Selections
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> ' + player.char.healthMax + '</p>'+
                '<p><b>Damage Reduction:</b> ' + player.cloth.damageReduction * 100 + '%</p>'+
                '<p><b>Damage:</b> ' + player.char.damage * player.weap.damageMult + '</p>'+
                '<p id="MD"><b>Mirror Damage:</b> ' + player.cloth.mirrorDamageMult * 100 + '%</p>'+
                '<p><b>Dodge Chance:</b> ' + player.char.dodgeChance * player.cloth.dodgeChanceMult * player.weap.dodgeChanceMult + '%</p>'+
                '<p><b>Hit Chance:</b> ' + player.weap.hitChance + '%</p>'+
                '<p id="MHC"><b>Multi Hit Chance:</b> ' + player.cloth.multiHitChance + '%</p>'+
                '<p id="SHC"><b>Soul Hit Chance:</b> ' + player.weap.soulHitChance + '%</p>'+
                '<p><b>Crit Chance:</b> ' + player.weap.critChance + '%</p>'+
                '<p id="SCC"><b>Soul Crit Chance:</b> ' + player.weap.soulCritChance + '%</p>'+
                '<p id="BC"><b>Bleed Chance:</b> ' + player.weap.bleedChance + '%</p>'+
                '<p id="SC"><b>Stun Chance:</b> ' + player.weap.stunChance + '%</p>'+
                '<p id="CBC"><b>Clothing Bleed Chance:</b> ' + player.cloth.bleedChance + '%</p>'+
                '<p id="CSC"><b>Clothing Stun Chance:</b> ' + player.cloth.stunChance + '%</p>'
            );

            // Remove Stats That Are Equal to 0
            if (player.cloth.mirrorDamageMult == 0) {$("#MD").hide();}
            if (player.cloth.multiHitChance == 0) {$("#MHC").hide();}
            if (player.weap.soulHitChance == 0) {$("#SHC").hide();}
            if (player.weap.soulCritChance == 0) {$("#SCC").hide();}
            if (player.weap.bleedChance == 0) {$("#BC").hide();}
            if (player.weap.stunChance == 0) {$("#SC").hide();}
            if (player.cloth.bleedChance == 0) {$("#CBC").hide();}
            if (player.cloth.stunChance == 0) {$("#CSC").hide();}
        break;
    }
});



// Stats Menu
$(document).on("change", "#StatView", function(){
    // Display Selected Stats
    switch ($("#StatView").val()) {
        // Show All Stats
        case "All":
            // Show All Stats
            $("#MenuContent").html(
                '<h3>Stats:</h3>'+
                '<p><b>Health:</b> ' + player.char.healthMax + '</p>'+
                '<p id="DR"><b>Damage Reduction:</b> ' + player.cloth.damageReduction * 100 + '%</p>'+
                '<p><b>Damage:</b> ' + player.char.damage * player.weap.damageMult + '</p>'+
                '<p id="MD"><b>Mirror Damage:</b> ' + player.cloth.mirrorDamageMult * 100 + '%</p>'+
                '<p><b>Dodge Chance:</b> ' + player.char.dodgeChance * player.cloth.dodgeChanceMult * player.weap.dodgeChanceMult + '%</p>'+
                '<p><b>Hit Chance:</b> ' + player.weap.hitChance + '%</p>'+
                '<p id="MHC"><b>Multi Hit Chance:</b> ' + player.cloth.multiHitChance + '%</p>'+
                '<p id="SHC"><b>Soul Hit Chance:</b> ' + player.weap.soulHitChance + '%</p>'+
                '<p><b>Crit Chance:</b> ' + player.weap.critChance + '%</p>'+
                '<p id="SCC"><b>Soul Crit Chance:</b> ' + player.weap.soulCritChance + '%</p>'+
                '<p id="BC"><b>Bleed Chance:</b> ' + player.weap.bleedChance + '%</p>'+
                '<p id="SC"><b>Stun Chance:</b> ' + player.weap.stunChance + '%</p>'+
                '<p id="CBC"><b>Clothing Bleed Chance:</b> ' + player.cloth.bleedChance + '%</p>'+
                '<p id="CSC"><b>Clothing Stun Chance:</b> ' + player.cloth.stunChance + '%</p>'
            );

            // Remove Stats That Are Equal to 0
            if (player.cloth.damageReduction == 0) {$("#DR").hide();}
            if (player.cloth.mirrorDamageMult == 0) {$("#MD").hide();}
            if (player.cloth.multiHitChance == 0) {$("#MHC").hide();}
            if (player.weap.soulHitChance == 0) {$("#SHC").hide();}
            if (player.weap.soulCritChance == 0) {$("#SCC").hide();}
            if (player.weap.bleedChance == 0) {$("#BC").hide();}
            if (player.weap.stunChance == 0) {$("#SC").hide();}
            if (player.cloth.bleedChance == 0) {$("#CBC").hide();}
            if (player.cloth.stunChance == 0) {$("#CSC").hide();}
        break;

        // Display Health Stats
        case "Health":
            // Show Health Breakdown
            $("#MenuContent").html(
                '<h3>Health:</h3>'+
                '<p><b>Character:</b> ' + player.char.healthMax / player.cloth.healthMult + '</p>'+
                '<p><b>Clothing:</b> ' + player.cloth.healthMult + 'x</p>'+
                '<p><b>Total:</b> ' + Math.floor(player.char.healthMax) + '</p>'
            );
        break;

        // Display Damage Stats
        case "Damage":
            // Show Damage Breakdown
            $("#MenuContent").html(
                '<h3>Damage:</h3>'+
                '<p><b>Character:</b> ' + player.char.damage + '</p>'+
                '<p><b>Weapon:</b> ' + player.weap.damageMult + 'x</p>'+
                '<p><b>Total:</b> ' + player.char.damage * player.weap.damageMult + '</p>'
            );
        break;

        // Display Dodge Chance Stats
        case "Dodge Chance":
            // Show Dodge Chance Breakdown
            $("#MenuContent").html(
                '<h3>Dodge Chance:</h3>'+
                '<p><b>Character:</b> ' + player.char.dodgeChance + '%</p>'+
                '<p><b>Clothing:</b> ' + player.cloth.dodgeChanceMult + 'x</p>'+
                '<p><b>Weapon:</b> ' + player.weap.dodgeChanceMult + 'x</p>'+
                '<p><b>Total:</b> ' + player.char.dodgeChance * player.cloth.dodgeChanceMult * player.weap.dodgeChanceMult + '%</p>'
            );
        break;
    }
});



// Merchant Man Menu
$(document).on("change", "#UpgradeSelector", function(){
    // Show Available Selected Upgrades
    switch ($("#UpgradeSelector").val()) {
        // Character Upgrades
        case "Character":
            // Show Available Character Upgrades
            $("#MenuContent").html(
                '<h3>Character:</h3>'+
                '<p>Unimplemented</p>'
            );

            // Set #InteractBtns
            $("#InteractBtns").html(
                '<button id="CharUpgradeBtn">-</button>'
            );
        break;

        // Clothing Upgrades
        case "Clothing":
            // Show Available Clothing Upgrades
            $("#MenuContent").html(
                '<h3>Clothing:</h3>'+
                '<p>Unimplemented</p>'
            );

            // Set #InteractBtns
            $("#InteractBtns").html(
                '<button id="ClothUpgradeBtn">-</button>'
            );
        break;

        // Weapon Upgrades
        case "Weapon":
            // Show Available Weapon Upgrades
            $("#MenuContent").html(
                '<h3>Weapon:</h3>'+
                '<p><b>Rank Up:</b> 50 Currency</p>'+
                '<p><b>Reroll Prefix:</b> 100 Currency</p>'
            );

        // Set #InteractBtns
            $("#InteractBtns").html(
                '<button id="WeapUpgradeBtn">Rank Up</button>'+
                '<button id="WeapPrefixRerollBtn">Reroll Prefix</button>'
            );
            break;
    }
});



// Keyboard Interaction
$(document).keypress(function(){
    if (event.key == "-") {
        $("select").focus();
    }
});