// Function for rolling an enemy
function rollEnemy() {
    // Roll for enemy type (Common, Uncommon, Rare, Very Rare, Secret)
    rollType = Math.floor((Math.random() * 100) + 1);
    switch (player.area) {
        // Test Area
        case "Test":
            // Common: 50%
            if (rollType <= 50) {
                // Roll for enemy
                roll = Math.floor((Math.random() * 2) + 1);
                switch (roll) {
                    // Cube
                    case 1:
                        enemy = enemCube;
                        break;
                    // Pyramid
                    case 2:
                        enemy = enemPyramid;
                        break;
                }
            }
            // Uncommon: 25%
            else if (rollType <= 75) {
                enemy = enemPlaceholder;
            }
            // Rare: 15%
            else if (rollType <= 90) {
                enemy = enemSuperPlaceholder;
            }
            // Very Rare: 8%
            else if (rollType <= 98) {
                enemy = enemUltraPlaceholder;
            }
            // Secret: 2%
            else if (rollType <= 100) {
                enemy = enemUltraPlaceholderier;
            }
    }
}

// Enemy Values
// Test Area
    // Common
        // Cube
        enemCube = {
            name: "Cube",
            healthMax: 50,
            health: 50,
            damage: 10,
            dodgeChance: 5,
            healthMult: 1,
            damageReduction: 0.1,
            multiHitChance: 0,
            mirrorDamageMult: 0,
            hitChance: 90,
            critChance: 5,
            soulHitChance: 0,
            soulCritChance: 0,
            bleedChance: 10,
            stunChance: 0
        }
        // Pyramid
        enemPyramid = {
            name: "Pyramid",
            healthMax: 100,
            health: 100,
            damage: 5,
            dodgeChance: 5,
            healthMult: 1,
            damageReduction: 0.1,
            multiHitChance: 0,
            mirrorDamageMult: 0,
            hitChance: 90,
            critChance: 5,
            soulHitChance: 0,
            soulCritChance: 0,
            bleedChance: 10,
            stunChance: 0
        }
    // Uncommon
        // Placeholder
        enemPlaceholder = {
            name: "Placeholder",
            healthMax: 100,
            health: 100,
            damage: 10,
            dodgeChance: 10,
            healthMult: 1,
            damageReduction: 0.1,
            multiHitChance: 0,
            mirrorDamageMult: 0,
            hitChance: 90,
            critChance: 5,
            soulHitChance: 0,
            soulCritChance: 0,
            bleedChance: 10,
            stunChance: 0
        }
    // Rare
        // Super Placeholder
        enemSuperPlaceholder = {
            name: "Super Placeholder",
            healthMax: 150,
            health: 150,
            damage: 15,
            dodgeChance: 15,
            healthMult: 1,
            damageReduction: 0.15,
            multiHitChance: 5,
            mirrorDamageMult: 0,
            hitChance: 85,
            critChance: 10,
            soulHitChance: 0,
            soulCritChance: 0,
            bleedChance: 15,
            stunChance: 5
        }
    // Very Rare
        // Ultra Placeholder
        enemUltraPlaceholder = {
            name: "Ultra Placeholder",
            healthMax: 200,
            health: 200,
            damage: 20,
            dodgeChance: 20,
            healthMult: 1,
            damageReduction: 0.20,
            multiHitChance: 10,
            mirrorDamageMult: 0,
            hitChance: 80,
            critChance: 15,
            soulHitChance: 0,
            soulCritChance: 0,
            bleedChance: 20,
            stunChance: 10
        }
    // Secret
        // Ultra Placeholderier
        enemUltraPlaceholderier = {
            name: "Ultra Placeholderier",
            healthMax: 400,
            health: 400,
            damage: 40,
            dodgeChance: 40,
            healthMult: 1,
            damageReduction: 0.40,
            multiHitChance: 20,
            mirrorDamageMult: 0.1,
            hitChance: 90,
            critChance: 30,
            soulHitChance: 15,
            soulCritChance: 5,
            bleedChance: 40,
            stunChance: 5
        }