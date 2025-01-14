//const { Phaser } = require("../../phaser")

class Play extends Phaser.Scene{
    constructor(){
        super('playScene')
        console.log('play: constructor');
    }
    init(stats){
        console.log('Play: init');
        this.HP = stats.HP,
        this.EXP = stats.EXP
        
    }
    create(){
        console.log('play:create');
    }



}