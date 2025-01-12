
const defaultAttributeScores = [15, 14, 13, 12, 10, 8];
class Player {
    constructor(characterName = 'Naruto') {
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
    }

    rollAttributes() {
        console.log('Rolling dice...')
    }

    printPlayer() {
        console.log(this.name);
        console.log(this.attributes);
    }
    printPlayer() {
        console.log(`NAME: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)) {
            console.log(`${key.slice(0, 3).toUpperCase()}: ${value}`);
        }
    };

}

// Fisher-Yates algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffleArray(targetArray) {
    let shuffled = Array.from(targetArray);
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
};


function diceRoller(times, sides) {
    let results = [];
    for (let i = 0; i < times; i++) {
        results.push(Math.floor(Math.random() * sides + 1));
    }

    return results;
};
function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum;
};

const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes();
player02.printPlayer();