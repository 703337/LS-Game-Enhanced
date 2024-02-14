// All code for Select elements goes here
// Character Selection
$(document).on("change", "#CharSelector", function(){
    switch ($("#CharSelector").val()) {
        // Display Citizen Stats
        case "citizen":
            $("#MenuContent").html(
                '<h3>Base Stats:</h3>'+
                '<p><b>Health:</b> 100</p>'+
                '<p><b>Damage:</b> 15</p>'+
                '<p><b>Dodge Chance:</b> 5%</p>'+
                '<h3>Curse: Painfully Average</h3>'+
                '<p>Take a small amount of damage when missing.</p>'
            );
            break;
        // Display Thief Stats
        case "thief":
            $("#MenuContent").html(
                '<h3>Stats Not Set</h3>'
            );
            break;
        // Display Chef Stats
        case "chef":
            $("#MenuContent").html(
                '<h3>Stats Not Set</h3>'
            );
            break;
        // Display 847RY-H3D Stats
        case "847ry-h3d":
            $("#MenuContent").html(
                '<h3>Stats Not Set</h3>'
            );
            break;
    }
});
