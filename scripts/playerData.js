// All code for player data goes here
// Set initial values
player = {
    // Character
    char: {
        name: "NULL",
        healthMax: 100,
        health: 100,
        damage: 10,
        dodgeChance: 0.05
    },
    // Clothing
    cloth: {
        name: "Whitespace",        
        healthMult: 1,
        damageReduction: 0.1,
        dodgeChanceMult: 1.1,
        multiHitChance: 0,
        mirrorDamageMult: 0,
        blockDamageChance: 0
    },
    // Weapon
    weap: {
        name: "Maw",
        damageMult: 1,
        dodgeChanceMult: 1,
        hitChance: 0.9,
        critChance: 0.05,
        soulHitChance: 0,
        soulCritChance: 0,
        experienceMult: 1,
        bleedChance: 0.1,
        stunChance: 0
    },
    experience: 0,
    // Set currency variable when name chosen >>> !!! <<<
    hasShield: false,
    isBleeding: false,
    isStunned: false
}

// Set 'player.char.healthMax' and 'player.char.health'
player.char.healthMax *= player.cloth.healthMult;
player.char.health = player.char.healthMax;

// Check for saved data
savedData = localStorage.getItem("savedData");

// Load saved data (if any)
if (savedData != null) {
    // Code Removed - Rewrite when 'player' variable setup finished
}