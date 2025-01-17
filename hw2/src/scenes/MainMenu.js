class MainMenu extends Phaser.Scene{
    constructor(){
        super('mainmenuScene');
        console.log('MainMenu: constructor');
    }
    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', "./assets/starfield.png")
    }
    init(){
        console.log('MainMenu init')

     //   console.log('HP: ${this.HP} EXP: ${this.EXP}')
    }


    create(){
        console.log('MainMenu create')
        // place tile sprite
        
    }

}