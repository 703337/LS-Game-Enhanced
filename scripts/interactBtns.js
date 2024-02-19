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
            // To-Do :: !!!
            break;
        // Clothing
        case "Nude":
            // To-Do :: !!!
            break;
        // Weapons
        case "Fists":
            // To-Do :: !!!
            break;
    }
}