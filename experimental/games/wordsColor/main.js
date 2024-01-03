import someFunction, {someVariable} from '/experimental/games/wordsColor/js/1.js';
someFunction()
console.log(someVariable)

const colorValues = [{name: 'yellow', color: 'gold'}, {name: 'red', color: 'red'}, {
    name: 'blue',
    color: 'cornflowerblue'
}, {name: 'black', color: 'black'}];
let score = 0;
let info_time = document.getElementById('info_time')

const okBad = document.getElementById('okBad')
const yes = document.getElementById('yes')
const no
    = document.getElementById('no')

let timer = 45


let rand1 = null;
let rand2 = null;
let rand3 = null;


const main = document.getElementById('main')
const answer = document.getElementById('answer')


const div = document.createElement('div')
div.classList.add('block')
const div2 = document.createElement('div')
div2.classList.add('block')

const btnYes = document.createElement('button')
btnYes.textContent = 'Yes'
const btnNo = document.createElement('button')
btnNo.textContent = 'No'

const divScore = document.getElementById('info_score')
divScore.textContent = `${score}`

////////// COLOR - SWITCHER //////////
const change = () => {
    rand1 = Math.floor(Math.random() * 4);
    rand2 = Math.floor(Math.random() * 4);
    rand3 = Math.floor(Math.random() * 4);

    div.textContent = colorValues[rand1].name
    div2.style.color = colorValues[rand2].color
    div2.textContent = colorValues[rand3].name

    divScore.textContent = `${score}`
}
change()
////////// COLOR - SWITCHER //////////

////////// GAME - TIMER //////////
let intervalTimer = setInterval(() => {
    if (timer > 0) {
        timer--
        info_time.textContent = `TIME 0:${timer}`
    } else {
        clearInterval(intervalTimer)
    }
}, 1000)
////////// GAME - TIMER //////////


let multiplier = 1;
let stackCounter = 0;


document.addEventListener('keydown', (e) => {
        if (e.key === 'd'){
            btnNoFunc()
        }
        if (e.key === 'a'){
            btnYesFunc()
        }
    }
);
btnYes.onclick = (e) => {

}
btnNo.onclick = (e) => {}

function btnNoFunc () {

        let inspector = score
        if (rand1 !== rand2) {
            score += 50 * multiplier
            okBad.style.width = "50px"
            okBad.style.transform = "scale(1)"
            okBad.style.height = "50px"
            okBad.style.background = "yellowgreen"
            okBad.textContent = "Y"
            setTimeout(() => {
                okBad.style.transform = "scale(0)"
            }, 200)
        } else {
            multiplier = 1;
            okBad.style.width = "50px"
            okBad.style.height = "50px"
            okBad.style.transform = "scale(1)"
            okBad.style.background = "red"
            okBad.textContent = "X"
            setTimeout(() => {
                okBad.style.transform = "scale(0)"

            }, 200)
        }
        if (score > inspector) {
            stackCounter++
        } else {
            stackCounter = 0;
        }
        if (stackCounter === 4) {
            multiplier *= 2;
            stackCounter = 0;
        }
        change()
}

function btnYesFunc (e) {

        let inspector = score
        if (rand1 === rand2) {
            score += 50 * multiplier
            okBad.style.width = "50px"
            okBad.style.height = "50px"
            okBad.style.transform = "scale(1)"
            okBad.style.background = "yellowgreen"
            // okBad.textContent = "Y"
            setTimeout(() => {
                okBad.style.transform = "scale(0)"
            }, 200)
        } else {
            multiplier = 1;
            okBad.style.width = "50px"
            okBad.style.height = "50px"
            okBad.style.transform = "scale(1)"
            okBad.style.background = "red"
            // okBad.textContent = "X"
            okBad.append()
            setTimeout(() => {
                okBad.style.transform = "scale(0)"
            }, 200)
        }
        if (score > inspector) {
            stackCounter++;
        } else {
            stackCounter = 0;
        }
        if (stackCounter === 4) {
            multiplier *= 2;
            stackCounter = 0;
        }
        change()
}


////////// menu //////////
const menu = document.createElement('div');
menu.classList.add('menu')
////////// menu //////////



////////// END - GAME //////////
setTimeout(() => {
    // main.style.display = 'none'
    main.style.pointerEvents = "none"

    main.append(menu)
    menu.append(`SCORE - ${score}`)

}, timer * 1000)
////////// END - GAME //////////


answer.append(btnYes, btnNo)
main.append(div, div2, answer)
document.body.append(main)
//TODO Создать меню, создать таблицу счета, иторию график игр, пауза и тд...