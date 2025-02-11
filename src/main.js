// 100's OR DEATH
// Collect as many 100's and to avoid getting hit by a slipper
// It's a dodging game that speeds up over time
// I used Rocket Patrol as a reference to get things started and went through there
// The main character is a sprite with three franmes: Left, Idle, and Right
// They move left and right to avoid obstacles and to grab 'good grades' (never amazing because 100's are basic in the typical Asian household /j)
// Two types of slippers, blue and purple, one hurts more than the other so it does more damage
// 100's are worth 50, blue slipper does -20, purple slipper does -40


let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyLEFT, keyRIGHT
