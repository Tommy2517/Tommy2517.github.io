let fieldSize = 45;
let enterWall = 451
let exitWall = 440
let randomFieldSpot = () => Math.floor(Math.random() * fieldSize) * 10;

function field() {
    let main = document.querySelector('.main')
        for (let i = 0; i < fieldSize; i++) {
            let y = document.createElement('div');
            y.classList.add('column')
            main.append(y)

            for (let j = 0; j < fieldSize; j++) {
                let x = document.createElement('div');
                x.classList.add('square')
                y.append(x)
            }
        }
}
field()