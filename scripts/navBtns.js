// All code for the buttons in the Nav elements goes here
// Ensure no code is run until the webpage has finished loading
$(function(){
    // Behaviour for #MainBtn1
    $("#MainBtn1").click(function(){
        // Check current intended behaviour for #MainBtn1 by checking current HTML content
        switch ($("#MainBtn1").html()){
            // Character Selection Menu
            case "Characters":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Characters');
                $("#MenuDescription").html('Use the dropdown to view a character\'s stats. The \'Select\' button can be used to pick the currently displayed class.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="characters" id="CharSelector">'+
                    '<option value="Citizen">Citizen</option>'+
                    '<option value="Thief">Thief</option>'+
                    '<option value="Chef">Chef</option>'+
                    '<option value="B47RY-H3D">B47RY-H3D</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Base Stats:</h3>'+
                    '<p><b>Health:</b> 100</p>'+
                    '<p><b>Damage:</b> 10</p>'+
                    '<p><b>Dodge Chance:</b> 5%</p>'+
                    '<h3>Curse: Painfully Average</h3>'+
                    '<p>Take a small amount of damage when missing.</p>'
                );
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="SelectBtn">Select</button>'
                );
                break;
        }
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "1") {
            $("#MainBtn1").click();
        }
    });

    //Behaviour for #MainBtn2
    $("#MainBtn2").click(function(){
        // Check current intended behaviour for #MainBtn2 by checking current HTML content
        switch ($("#MainBtn2").html()){
            // Clothing Selection Menu
            case "Clothing":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Clothing');
                $("#MenuDescription").html('Use the dropdown to view an item of clothing\'s stats. The \'Select\' button can be used to pick the currently displayed clothing.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="clothing" id="ClothSelector">'+
                    '<option value="Nude">Nude</option>'+
                    '<option value="Thieves\' Cloak">Thieves\' Cloak</option>'+
                    '<option value="Chefswear">Chefswear</option>'+
                    '<option value="Shock Plating">Shock Plating</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Stats:</h3>'+
                    '<p><b>Damage Reduction:</b> 0%</p>'+
                    '<p><b>Dodge Chance:</b> 2x</p>'
                );
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="SelectBtn">Select</button>'
                );
                break;
        }
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "2") {
            $("#MainBtn2").click();
        }
    });

    //Behaviour for #MainBtn3
    $("#MainBtn3").click(function(){
        // Check current intended behaviour for #MainBtn3 by checking current HTML content
        switch ($("#MainBtn3").html()){
            // Weapon Selection Menu
            case "Weapons":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Weapons');
                $("#MenuDescription").html('Use the dropdown to view a weapon\'s stats. The \'Select\' button can be used to pick the currently displayed weapon.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="weapons" id="WeapSelector">'+
                    '<option value="Fists">Fists</option>'+
                    '<option value="Pocket Knife">Pocket Knife</option>'+
                    '<option value="Cleaver">Cleaver</option>'+
                    '<option value="Butter Knife">Butter Knife</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Stats:</h3>'+
                    '<p><b>Damage:</b> 1x</p>'+
                    '<p><b>Dodge Chance:</b> 1.5x</p>'+
                    '<p><b>Hit Chance:</b> 90%</p>'+
                    '<p><b>Crit Chance:</b> 2%</p>'
                );
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="SelectBtn">Select</button>'
                );
                break;
            case "Stats":
                // Stat Information Menu
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Stats');
                $("#MenuDescription").html('View your current stats and a breakdown of certain stats. <br>Stats equal to 0 are not shown.<br>&nbsp;<br><b>' + player.char.name + ' - ' + player.cloth.name + ' - ' + player.weap.prefix + " " + player.weap.name + '</b>');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="stats" id="StatView">'+
                    '<option value="All">All Stats</option>'+
                    '<option value="Health">Health</option>'+
                    '<option value="Damage">Damage</option>'+
                    '<option value="Dodge Chance">Dodge Chance</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Stats:</h3>'+
                    '<p><b>Health:</b> ' + Math.floor(player.char.healthMax) + '</p>'+
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
                // Set #InteractBtns
                $("#InteractBtns").html('');
                // Remove Stats That Are 0
                if (player.cloth.damageReduction == 0) {$("#DR").hide();}
                if (player.cloth.mirrorDamageMult == 0) {$("#MD").hide();}
                if (player.cloth.multiHitChance == 0) {$("#MHC").hide();}
                if (player.weap.soulHitChance == 0) {$("#SHC").hide();}
                if (player.weap.soulCritChance == 0) {$("#SCC").hide();}
                if (player.weap.bleedChance == 0) {$("#BC").hide();}
                if (player.weap.stunChance == 0) {$("#SC").hide();}
                if (player.weap.bleedChance == 0) {$("#CBC").hide();}
                if (player.weap.stunChance == 0) {$("#CSC").hide();}
                break;
        }
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "3") {
            $("#MainBtn3").click();
        }
    });

    //Behaviour for #MainBtn4
    $("#MainBtn4").click(function(){
        // Check current intended behaviour for #MainBtn4 by checking current HTML content
        switch ($("#MainBtn4").html()){
            // Start Menu
            case "Start":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Start');
                $("#MenuDescription").html('Review your current selections and begin when you are ready.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="info" id="InfoSelector">'+
                    '<option value="Selections">Selections</option>'+
                    '<option value="Base Stats">Base Stats</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Current Selection:</h3>'+
                    '<p id="ChosenChar"><b>Character:</b> ' + player.char.name + '</p>'+
                    '<p id="ChosenCloth"><b>Clothing:</b> ' + player.cloth.name + '</p>'+
                    '<p id="ChosenWeap"><b>Weapon:</b> ' + player.weap.name + '</p>'
                );
                // Ensure secret character does not display
                if (player.char.name == "NULL") {
                    $("#ChosenChar").html("<b>Character:</b> -");
                }
                if (player.cloth.name == "Whitespace") {
                    $("#ChosenCloth").html("<b>Clothing:</b> -");
                }
                if (player.weap.name == "Maw") {
                    $("#ChosenWeap").html("<b>Weapon:</b> -");
                }
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="StartBtn">Start</button>'
                );
                break;
            // Merchant Man Menu
            case "Merchant":
                // Roll a random line of dialogue for #MenuDescription
                dialogueRoll = Math.floor(Math.random() * 8);
                switch (dialogueRoll) {
                    case 1:
                        merchantDialogue = "Buy something!";
                        break;
                    case 2:
                        merchantDialogue = "Got coins?";
                        break;
                    case 3:
                        merchantDialogue = "Better weapons means better killing!";
                        break;
                    case 4:
                        merchantDialogue = "Cleaner clothes means cleaner killing!";
                        break;
                    case 5:
                        merchantDialogue = "You are weak. Buy something from me to be strong!";
                        break;
                    case 6:
                        merchantDialogue = "Have you killed them all? No? Then keep buying!";
                        break;
                    case 7:
                        merchantDialogue = "Something's wrong.";
                        break;
                }
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Merchant');
                $("#MenuDescription").html(merchantDialogue);
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="upgrade" id="UpgradeSelector">'+
                    '<option value="Character">Character</option>'+
                    '<option value="Clothing">Clothing</option>'+
                    '<option value="Weapon">Weapon</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Character:</h3>'+
                    '<p>Unimplemented</p>'
                );
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="CharUpgradeBtn">-</button>'
                );
                break;
        }
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "4") {
            $("#MainBtn4").click();
        }
    });

    // 
    // The buttons below, while not within the <nav> element, are navigational buttons for the site.
    // 

    // Behaviour for #UpdateLogBtn
    $("#BugReportBtn").click(function(){
        // Open bug reporting page on Github.com
        window.open('https://github.com/703337/LS-Game-Enhanced/issues');
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "6") {
            $("#BugReportBtn").click();
        }
    });

    // Behaviour for #UpdateLogBtn
    $("#UpdateLogBtn").click(function(){
        // Set #MenuHeader and #MenuDescription Content
        $("#MenuHeader").html('What\'s New?');
        $("#MenuDescription").html('See what\'s new in the latest update.');
        // Set #SubMenuBtns
        $("#SubMenuBtns").html(
            ''
        );
        // Set #MenuContent
        $("#MenuContent").html(
            '<ul style="text-align: left;">'+
            '<li>Added weapon and clothing prefixes. Prefixes currently have no functionality.</li>'+
            '<li>Added some error codes related to the prefix rolling function.</li>'+
            '<li>Removed an unnecessary variable related to save data.</li>'+
            '<li>Clothing can now have bleed and stun chances.</li>'+
            '<li>Added an option to clear player data in the data settings.</li>'+
            '<li>Moved a message related to currently available menus to the correct location.</li>'+
            '</ul>'+
            '<p><b>Last Updated 22/01/2025</b></p>'
        );
        // Set Interact Buttons
        $("#InteractBtns").html(
            ''
        );
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "7") {
            $("#UpdateLogBtn").click();
        }
    });

    // Behaviour for #SettingsBtn
    $("#SettingsBtn").click(function(){
        // Set #MenuHeader and #MenuDescription Content
        $("#MenuHeader").html('Settings');
        $("#MenuDescription").html('Adjust some settings or delete data.');
        // Set #SubMenuBtns
        $("#SubMenuBtns").html(
            '<button id="GeneralSettingsBtn">General</button>'+
            '<button id="DataSettingsBtn">Data</button>'
        );
        // Set Menu Content
        $("#MenuContent").html(
            '<p>Display Mode: <button id="GeneralSettingsStyleToggleBtn">' + settings.displayMode + '</button></p>'
        );
        // Set Interact Buttons
        $("#InteractBtns").html(
            ''
        );
    });
    // Trigger via keypress
    $(document).keypress(function(){
        if (event.key == "8") {
            $("#SettingsBtn").click();
        }
    });
});