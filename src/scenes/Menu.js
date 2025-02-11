class Menu extends Phaser.Scene {
    constructor () {
        super('menuScene')
    }

    preload() {

        //sprite + image loading
        // ex) this.load.image('rocket', './assets/rocket.png')

        this.load.image('mainScreen', './assets/mainScreen.png')

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
        this.mainScreen = this.add.image(0, 0, 'mainScreen').setOrigin(0, 0)

        this.mainScreen.setScale(4)



        let menuConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '30px',
            backgroundColor: '#000000',
            color: '#00ff00',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height - 230, 'Click the <- arrow to start', menuConfig).setOrigin(0.5)

        //keys

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)



    }

    update() {

        // put what happens when certain keys are pressed in this menu screen

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {

            // easy mode
  
            game.settings = {
              slipperSpeed: 2,
              slipper2Speed: 2,
              AAspeed: 2,
            }
            
            this.scene.start('playScene')    
        }
  
          if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
  
            // hard mode
  
            game.settings = {
              slipperSpeed: 3,
              slipper2Speed: 3,
              AAspeed: 4,
            }
  
            this.scene.start('playScene')    
        }
    }
    
}