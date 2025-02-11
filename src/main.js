// Ria Iyer
// Title: 100's OR DEATH
// Time spent: 22 hours
// Summary:
// Collect as many 100's and to avoid getting hit by a slipper
// It's a dodging game that speeds up over time
// I used Rocket Patrol as a reference to get things started and went through there
// The main character is a sprite with three franmes: Left, Idle, and Right
// They move left and right to avoid obstacles and to grab 'good grades' (never amazing because 100's are basic in the typical Asian household /j)
// Two types of slippers, blue and purple, one hurts more than the other so it does more damage
// 100's are worth 50, blue slipper does -20, purple slipper does -40
// More summary:
// I based this off of my life as a child :)
// A couple of things I implemented that I didn't learn in class include:
// changing the rate of the audio
// time events and delays
// killing all sounds
// In terms of visual style, I went pretty basic and drew all of my stuff on Pixilart
// I wanted it to be minimal detail and covered the screen with these objects to increase tilting even if the art is poorly made
// I had fun making the title screen though, I tried to make it gruesome even though it's not that deep
// Sources:
// https://stackoverflow.com/questions/73068289/how-can-i-decrease-delay-in-this-time-addevent-in-phaser-js-based-on-score
// https://www.google.com/search?q=how+to+speed+up+an+audio+in+phaser&rlz=1C1UEAD_enUS1148US1148&oq=how+to+speed+up+an+audio+in+phaser&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORigATIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRifBdIBCDY2MjBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
// Pixabay -> for all sounds
//


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
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyLEFT, keyRIGHT, keyRESET, keyRESTART
