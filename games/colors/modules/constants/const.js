const colors = {
    name:'',
    score: 0,
    bestScore: 0,
    results: [],
    connections: 0,
}

export {colors}

class Constants {
    gameTime = 30
    correctAnswerCount = 0
    incorrectAnswerCount = 0
    reward = 50;
    multiplier = 1;
    stackCounter = 0;
    colorValues = [
        [
            {name: 'yellow', color: 'gold'},
            {name: 'red', color: 'red'},
        ],
        [
            {name: 'blue', color: 'cornflowerblue'},
            {name: 'black', color: 'black'}
        ]
    ];
}

export const constants = new Constants()