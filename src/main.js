let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
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
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
