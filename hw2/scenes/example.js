

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.donuts = [];
    }

    preload ()
    {   //https://labs.phaser.io/
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/skies/grid.png');
        this.load.image('donut', 'assets/sprites/donut.png');
    }

    create ()
    {
        this.add.image(400, 600, 'bg').setOrigin(0.5, 1);

        this.cameras.main.setBounds(0, 0, 800, 600);

        for (let i = 0; i < 16; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(200, 600);

            this.donuts.push(this.add.image(x, y, 'donut'));
        }
    }

    update ()
    {
        Phaser.Actions.IncX(this.donuts, -5, -0.5);

        Phaser.Actions.WrapInRectangle(this.donuts, this.cameras.main.getBounds(), 128);
    }
}
/*
const config = {

    scene: Example
};

const game = new Phaser.Game(config);*/