// All code for rolling weapon/clothing prefixes goes here



// Roll prefix for weapons/clothing (type) and specify the desired weapon/clothing (name)
function rollPrefix(type, name) {
    // Clear/Create Error Variable
    error = "Nothing to report."

    // roll a number from 1 to 1000 (0.1 to 100.0) to set a prefixs
    var roll = Math.floor(Math.random() * 1001);

    // Check if rolling for weapons or clothing
    switch (type) {
        // Roll For Weapons
        case "weapon":
            switch (name) {
                // Maw
                case "Maw":
                    if (roll <= 500) {
                        player.weap.prefix = "Bloody";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Fists
                case "Fists":
                    if (roll <= 500) {
                        player.weap.prefix = "Bloody";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Pocket Knife
                case "Pocket Knife":
                    if (roll <= 500) {
                        player.weap.prefix = "Bloody";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Cleaver
                case "Cleaver":
                    if (roll <= 500) {
                        player.weap.prefix = "Bloody";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Butter Knife
                case "Butter Knife":
                    if (roll <= 500) {
                        player.weap.prefix = "Sticky";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Alert the player to an issue with this function
                default:
                    alert("Error: Invalid weapon name.");
                    error = "prefixRoll.js: InvalidWeap";
                break;
            }
        break;

        // Roll For Clothing
        case "clothing":
            switch (name) {
                // Whitespace
                case "Whitespace":
                    if (roll <= 500) {
                        player.cloth.prefix = "Blinding";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Nude
                case "Nude":
                    if (roll <= 500) {
                        player.cloth.prefix = "Stunningly";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Thieves' Cloak
                case "Thieves' Cloak":
                    if (roll <= 500) {
                        player.cloth.prefix = "Shadowy";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Chefswear
                case "Chefswear":
                    if (roll <= 500) {
                        player.cloth.prefix = "Reinforced";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Chefswear
                case "Chefswear":
                    if (roll <= 500) {
                        player.cloth.prefix = "Shocking Shock Plate";
                        // STAT ALTERATIONS HERE
                    } 
                break;

                // Alert the player to an issue with this function
                default:
                    alert("Error: Invalid clothing name.");
                    error = "prefixRoll.js: InvalidCloth";
                break;
            }
        break;

        // Alert the player to an issue with this function
        default:
            alert("Error: Invalid roll type.");
        break;
    }
}