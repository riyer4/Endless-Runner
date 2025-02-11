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
        
        this.load.audio('gain', './assets/gain.mp3')
        this.load.audio('hit', './assets/hit.mp3')
        this.load.audio('select', './assets/select.mp3')
        this.load.audio('mode', './assets/mode.mp3')


        this.load.audio('music', './assets/music.mp3')



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

        this.add.text(game.config.width/2, game.config.height - 255, '<- Easy Mode or Hard Mode ->', menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height - 210, 'Click either <-> arrows', menuConfig).setOrigin(0.5)


        //hs 

        this.highscore = 0
        let highscoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#000',
            color: '#fff',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }

        this.highscoreLeft = this.add.text(0, 610, `Highscore: ${this.highscore}`, highscoreConfig)


        //keys

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        if (!this.sound.get('music')) {
            let bgm = this.sound.add('music', { loop: true });
            bgm.play();
        }
        

    }

    update() {

        // hs mods 

        this.highscoreLeft.text = `Highscore: ${localStorage.getItem('highscore')}` 
        {
            if (this.p1Score > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', this.p1Score)
            }  
        }

        // put what happens when certain keys are pressed in this menu screen

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {

            this.sound.play('mode')

            // easy mode
  
            game.settings = {
              slipperSpeed: 2,
              slipper2Speed: 2,
              AAspeed: 2,
            }
            
            this.scene.start('playScene')    
        }
  
          if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {

            this.sound.play('mode')
  
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