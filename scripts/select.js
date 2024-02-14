// All code for Select elements goes here
// Character Selection
$("#CharSelector").change(function(){
    switch ($("#CharSelector").val()) {
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
        case "thief":
            $("#MenuContent").html(
                '<h3>Stats Not Set</h3>'
            );
            break;
    }
});