const colorValues = [{name: 'yellow', color:'gold'}, {name: 'red', color:'red'}, {name: 'blue', color:'cornflowerblue'}, {name: 'black', color:'black'}];
let score = 0;

const div = document.createElement('div')
div.classList.add('block')
const div2 = document.createElement('div')
div2.classList.add('block')

const btnYes = document.createElement('button')
btnYes.textContent = 'Yes'
const btnNo = document.createElement('button')
btnNo.textContent = 'No'

const divScore = document.createElement('div')
divScore.classList.add('block')
divScore.textContent = `${score}`

let rand1 = null;
let rand2 = null;
let rand3 = null;
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

btnNo.onclick = () => {
    if (rand1 !== rand2){
        score++
    }
    change()
}
btnYes.onclick = () => {
    if (rand1 === rand2){
        score++
    }
    change()
}
const main = document.getElementById('main')
const answer = document.getElementById('answer')
answer.append(btnYes,btnNo)
main.append(div, div2, answer, divScore)
document.body.append(main)
