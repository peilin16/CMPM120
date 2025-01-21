// Code Practice: Making a Scene
// Name:Peilin Huang
// Date: Jan 13 2025

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 480,
    //backgroundColor: '#000000',
    //parent: 'phaser-example',
    scene: [Play,MainMenu]
}
//this.scene.start("playScene")
let game = new Phaser.Game(config)
// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
// green UI background
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

