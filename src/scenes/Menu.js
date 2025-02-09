class Menu extends Phaser.Scene {
    constructor () {
        super('menuScene')
    }

    preload() {

        //sprite + image loading
        // ex) this.load.image('rocket', './assets/rocket.png')

        this.load.image('AA', './assets/100-paper.png')
        this.load.image('blue', './assets/blue-slipper.png')
        this.load.image('purple', './assets/purple-slipper.png')
        

        this.load.spritesheet('player', './assets/player.png', {
            frameWidth: 16,
            frameHeight: 16,
            startFrame: 0,
            endFrame: 2
        })




        //audio loading
        // ex) this.load.audio('sfx-select', './assets/sfx-select.wav')

    }

    create() {

        //main screen
        //ex) this.mainScreen = this.add.tilesprite(0, 0, 640, 480, 'mainScreen).setOrigin(0, 0)

        let menuConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '35px',
            backgroundColor: '#add8e6',
            color: '#000',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height - 150, 'Welcome to wtvr this is', menuConfig).setOrigin(0.5)

        //keys

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)



    }

    update() {

        // put what happens when certain keys are pressed in this menu screen

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {

            this.scene.start('playScene')    
          }
    }
    
}