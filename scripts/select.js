// All code for Select elements goes here
// Character Selection
$(document).on("change", "#CharSelector", function(){
    switch ($("#CharSelector").val()) {
        // Display Citizen Stats
        case "citizen":
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
        case "thief":
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
        case "chef":
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
        case "b47ry-h3d":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 90</p>'+
                '<p><b>Damage:</b> 15</p>'+
                '<p><b>Dodge Chance:</b> 2%</p>'+
                '<h3>Curse: Overstuffed</h3>'+
                '<p>Slowly increase damage and damage reduction when not blocking but begin taking increasing damage after 4 turns.</p>'
            );
            break;
    }
});
