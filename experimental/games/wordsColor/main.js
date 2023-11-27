const colorNames = ['yellow', 'red', 'blue', 'black'];
const colorValues = ['yellow', 'red', 'blue', 'black'];

const div = document.createElement('div')
div.classList.add('block')
const div2 = document.createElement('div')
div2.classList.add('block')

const btnYes = document.createElement('button')
btnYes.textContent = 'Yes'
const btnNo = document.createElement('button')
btnNo.textContent = 'No'

let score = 0;
const divScore = document.createElement('div')
divScore.classList.add('block')
divScore.textContent = `${score}`
const change = () => {
    // div.style.color = colorValues[Math.floor(Math.random() * 4)]
    div.textContent = colorValues[Math.floor(Math.random() * 4)]
    // console.log('div 1 - ', div.style.background)
    div2.style.color = colorValues[Math.floor(Math.random() * 4)]
    div2.textContent = colorValues[Math.floor(Math.random() * 4)]
    console.log('div 2 - ', div2.style.background)
    divScore.textContent = `${score}`
}

btnNo.onclick = () => {
    if (div.textContent !== div2.style.color){
        score++
    }
    change()
}
btnYes.onclick = () => {
    if (div.textContent === div2.style.color){
        score++
    }
    change()
}
document.body.append(div, div2, btnYes,btnNo,divScore)
