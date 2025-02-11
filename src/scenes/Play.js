class Play extends Phaser.Scene {
    constructor () {
        super('playScene')
    }

    preload() {

        //sprite + image loading
        // ex) this.load.image('rocket', './assets/rocket.png')

        this.load.image('mainScreen', './assets/mainScreen.png')

        this.load.image('AA', './assets/100-paper.png')
        this.load.image('blue', './assets/blue-slipper.png')
        this.load.image('purple', './assets/purple-slipper.png')
        

        this.load.spritesheet('player', './assets/player.png', {
            frameWidth: 15.75,
            frameHeight: 16,
            startFrame: 0,
            endFrame: 2
        })




        //audio loading
        // ex) this.load.audio('sfx-select', './assets/sfx-select.wav')

    }

    create() {

        //starting place

        this.add.rectangle(0, 580, game.config.width, game.config.width / 10, 0xF000f0).setOrigin(0, 0)
        

        //mc
        this.player = new Player(this, game.config.width/2, game.config.height/2 + 260, 'player', 1).setOrigin(0, 0)

        this.player.setScale(3)

        //slippers

        this.blue = new Slipper(this, 100, 0, 'blue', 20).setOrigin(0, 0)

        this.purple = new Slipper2(this, 200, 100, 'purple', 40).setOrigin(0, 0)


        this.AA = new AA(this, 200, 200, 'AA', 50).setOrigin(0, 0)

        //keys

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        //score

        this.p1Score = 0 //intializing the score

        // score stuff

        
        let scoreConfig = {
            fontFamily: 'Courier',
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

        this.scoreLeft = this.add.text(240, 20, this.p1Score, scoreConfig)

        this.gameOver = false



    }

    update() {


        // end of game

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.restart()
        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            
            this.scene.start("menuScene")
        }

        this.player.update()

        this.AA.update()

        this.blue.update()
        this.purple.update()

        // do a collision check

        if(this.checkCollision(this.player, this.blue)) {
            this.blue.update()
            this.playerHit(this.blue)
            this.damaged(this.blue)
        }

        
        if(this.checkCollision(this.player, this.purple)) {
            this.purple.update()
            this.playerHit(this.purple)
            this.damaged(this.purple)
        }

        if(this.checkCollision(this.player, this.AA)) {
            this.AA.update()
            this.playerGain(this.AA)
            this.goodGrades(this.AA)
        }
        


        if (!this.gameOver) {
            //update everything under here
            this.player.reset()
            this.blue.update()
            this.purple.update()
            this.AA.update()
        }

    }

    checkCollision(player, item) {
        // copy from prev assignment
        // or take inspo from golf in class assignment

        if (player.x < item.x + item.width &&
            player.x + player.width > item.x &&
            player.y < item.y + item.height &&
            player.height + player.y > item.y) {
                return true
            } else {
                return false
            }
    }

    playerHit(player) {

        player.setTint(0xFFFFFF) // found t

        setTimeout(() => {
            player.clearTint()
        }, 20)
        
    }

    damaged(slipper) {

        slipper.alpha = 0

        this.p1Score -= slipper.points
        this.scoreLeft.text = this.p1Score

        if (this.p1Score < 0) {
            this.forGameOver()
            return
        }

        slipper.reset()
        slipper.alpha = 1
    }

    playerGain(player) { 
        player.setTint(0x000000) 

        setTimeout(() => {
            player.clearTint()
        }, 20)
    }

    goodGrades(hundred) {

        hundred.alpha = 0
        
        this.p1Score += hundred.points
        this.scoreLeft.text = this.p1Score

        
        if (this.p1Score < 0) {
            this.forGameOver()
            return
        }

        hundred.reset()
        hundred.alpha = 1
    }

    forGameOver() {
        this.gameOver = true

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '25px',
            backgroundColor: '#add8e6',
            color: '#000',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }
        

        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press -> to Restart or <- for Menu', scoreConfig).setOrigin(0.5)
        
    }

}