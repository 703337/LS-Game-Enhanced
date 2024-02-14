// All code for the buttons in the Nav elements goes here
// Ensure no code is run until the webpage has finished loading
$(function(){
    //
    // Pre-Save Data Behaviour
    //

    // Behaviour for #MainBtn1
    $("#MainBtn1").click(function(){
        // Check current intended behaviour for #MainBtn1 by checking current HTML content
        switch ($("#MainBtn1").html()){
            case "Characters":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Characters');
                $("#MenuDescription").html('Use the dropdown to view a character\'s stats. The \'Select\' button can be used to pick the currently displayed class.');
                // Set #SubM;enuBtns
                $("#SubMenuBtns").html(
                    '<select name="characters" id="CharSelector">'+
                    '<option value="citizen">Citizen</option>'+
                    '<option value="thief">Thief</option>'+
                    '<option value="chef">Chef</option>'+
                    '<option value="b47ry-h3d">B47RY-H3D</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Base Stats:</h3>'+
                    '<p><b>Health:</b> 100</p>'+
                    '<p><b>Damage:</b> 15</p>'+
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

    //Behaviour for #MainBtn2
    $("#MainBtn2").click(function(){
        // Check current intended behaviour for #MainBtn2 by checking current HTML content
        switch ($("#MainBtn2").html()){
            case "Clothing":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Clothing');
                $("#MenuDescription").html('Use the dropdown to view an item of clothing\'s stats. The \'Select\' button can be used to pick the currently displayed clothing.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="clothing" id="ClothingSelector">'+
                    '<option value="nude">Nude</option>'+
                    '<option value="thievesCloak">Thieves\' Cloak</option>'+
                    '<option value="chefswear">Chefswear</option>'+
                    '<option value="shockPlating">Shock Plating</option>'+
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

    //Behaviour for #MainBtn3
    $("#MainBtn3").click(function(){
        // Check current intended behaviour for #MainBtn3 by checking current HTML content
        switch ($("#MainBtn3").html()){
            case "Weapons":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Weapons');
                $("#MenuDescription").html('Use the dropdown to view a weapon\'s stats. The \'Select\' button can be used to pick the currently displayed weapon.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="weapons" id="WeapSelector">'+
                    '<option value="fists">Fists</option>'+
                    '<option value="pocketKnife">Pocket Knife</option>'+
                    '<option value="cleaver">Cleaver</option>'+
                    '<option value="butterKnife">ButterKnife</option>'+
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
        }
    });

    //Behaviour for #MainBtn4
    $("#MainBtn4").click(function(){
        // Check current intended behaviour for #MainBtn4 by checking current HTML content
        switch ($("#MainBtn4").html()){
            case "Start":
                // Set #MenuHeader and #MenuDescription Content
                $("#MenuHeader").html('Start');
                $("#MenuDescription").html('Review your current selections and begin when you are ready.');
                // Set #SubMenuBtns
                $("#SubMenuBtns").html(
                    '<select name="info" id="InfoSelector">'+
                    '<option value="selections">Selections</option>'+
                    '<option value="baseStats">Base Stats</option>'+
                    '</select>'
                );
                // Set #MenuContent
                $("#MenuContent").html(
                    '<h3>Current Selection:</h3>'+
                    '<p><b>Character:</b> Variable Doesn\'t Exist</p>'+
                    '<p><b>Clothing:</b> Variable Doesn\'t Exist</p>'+
                    '<p><b>Weapon:</b> Variable Doesn\'t Exist</p>'
                );
                // Set #InteractBtns
                $("#InteractBtns").html(
                    '<button id="StartBtn">Start</button>'
                );
                break;
        }
    });
});