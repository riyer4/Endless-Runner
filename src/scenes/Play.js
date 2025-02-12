class Play extends Phaser.Scene {
    constructor () {
        super('playScene')
    }

    create() {


        this.cameras.main.setBackgroundColor(0x31235c)

        //tile sprite

        this.white = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'white').setOrigin(0, 0).setScale(4)
        this.mint = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'mint').setOrigin(0, 0).setScale(4)
        this.pink = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'pink').setOrigin(0, 0).setScale(4)

        
        this.whiteSpeed = 0.2
        this.mintSpeed = 0.5
        this.pinkSpeed = 0.8

        //starting place

        this.add.rectangle(0, 580, game.config.width, game.config.width / 10, 0xF000f0).setOrigin(0, 0)
        

        //mc
        this.player = new Player(this, game.config.width/2, game.config.height/2 + 260, 'player', 1).setOrigin(0, 0)

        this.player.setScale(3)

        //slippers

        this.blue = new Slipper(this, 20, 50, 'blue', 20).setOrigin(0, 0)
        this.blue2 = new Slipper(this, 280, 100, 'blue', 20).setOrigin(0, 0)
        this.blue3 = new Slipper(this, 320, 0, 'blue', 20).setOrigin(0, 0)


        this.purple = new Slipper2(this, 400, 0, 'purple', 40).setOrigin(0, 0)
        this.purple2 = new Slipper2(this, 180, 50, 'purple', 40).setOrigin(0, 0)



        this.AA = new AA(this, 100, 50, 'AA', 30).setOrigin(0, 0)


        //keys

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyRESTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)


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

        //time stuff

        this.time.addEvent({ // saw this  in the list of options when I saw the time capabilities in phaser docs + found a link that showed a version of this (DID NOT COPY I SWEAR)
            delay: 15000,
            callback: this.increaseDifficulty,
            callbackScope: this,
            loop: true
        })



    }

    update() {

        this.white.tilePositionX -= this.whiteSpeed
        this.mint.tilePositionX -= this.mintSpeed
        this.pink.tilePositionX -= this.pinkSpeed


        // hs mods

        this.highscoreLeft.text = `Highscore: ${localStorage.getItem('highscore')}` 
        {
            if (this.p1Score > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', this.p1Score)
            }  
        }


        // end of game

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyRESET)) {
            this.sound.play('select')

            this.scene.restart()

        }

        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyRESTART)) {
            this.sound.play('select')

            
            this.scene.start("menuScene")
        }

        this.player.update()

        this.AA.update()


        this.blue.update()
        this.blue2.update()
        this.blue3.update()

        this.purple.update()
        this.purple2.update()


        // do a collision check

        if(this.checkCollision(this.player, this.blue)) {
            this.blue.update()
          //  this.playerHit(this.blue)
            this.damaged(this.blue)
        }

        if(this.checkCollision(this.player, this.blue2)) {
            this.blue2.update()
          //  this.playerHit(this.blue2)
            this.damaged(this.blue2)
        }

        if(this.checkCollision(this.player, this.blue3)) {
            this.blue3.update()
          //  this.playerHit(this.blue3)
            this.damaged(this.blue3)
        }


        
        if(this.checkCollision(this.player, this.purple)) {
            this.purple.update()
          //  this.playerHit(this.purple)
            this.damaged(this.purple)
        }

        if(this.checkCollision(this.player, this.purple2)) {
            this.purple2.update()
           // this.playerHit(this.purple2)
            this.damaged(this.purple2)
        }



        if(this.checkCollision(this.player, this.AA)) {
            this.AA.update()
           // this.playerGain(this.AA)
            this.goodGrades(this.AA)
        }


        if (!this.gameOver) {
            //update everything under here
            this.player.reset()
            this.blue.update()
            this.blue2.update()
            this.blue3.update()
            this.purple.update()
            this.purple2.update()
            this.AA.update()
        } else {
            this.player.moveSpeed = 0
            this.player.setFrame(1)
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

    increaseDifficulty() { // after a certain time, it will get harder
        game.settings.slipperSpeed += 0.5;  // Adjust the increment as needed
        game.settings.slipper2Speed += 0.5;
        game.settings.AAspeed += 0.5;
    }
    

    // playerHit(player) {

    //     player.setTint(0xFFFFFF) // found t

    //     setTimeout(() => {
    //         player.clearTint()
    //     }, 100)
        
    // }

    damaged(slipper) {

        slipper.alpha = 0

        this.p1Score -= slipper.points
        this.scoreLeft.text = this.p1Score

        if (this.p1Score < 0) {
            this.forGameOver()
            return
        }

        this.sound.play('hit', {rate: 1.5})

        slipper.reset()
        slipper.alpha = 1
    }

    // playerGain(player) { 
    //     player.setTint(0x000000) 

    //     setTimeout(() => {
    //         player.clearTint()
    //     }, 100)
    // }

    goodGrades(hundred) {

        hundred.alpha = 0
        
        this.p1Score += hundred.points
        this.scoreLeft.text = this.p1Score

        
        if (this.p1Score < 0) {
            this.forGameOver()
            return
        }

        this.sound.play('gain')


        hundred.reset()
        hundred.alpha = 1
    }
    

    forGameOver() {
        this.gameOver = true

        //this.sound.stopAll() //I found this on google for how to kill all sounds

        // this.sound.sounds.forEach((sound) => {
        //     if (sound !== this.bgm) {
        //         sound.stop();
        //     }
        // });

        

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '25px',
            backgroundColor: '#008080',
            color: '#000',
            allig: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },

            fixedWidth: 0
        }
        

        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or (M) for Menu', scoreConfig).setOrigin(0.5)

        this.p1Score = 0
        this.scoreLeft.text = this.p1Score
        
    }

}