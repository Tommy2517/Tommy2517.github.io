const colorValues = [{name: 'yellow', color:'gold'}, {name: 'red', color:'red'}, {name: 'blue', color:'cornflowerblue'}, {name: 'black', color:'black'}];
let score = 0;
let info_time = document.getElementById('info_time')
let timer = 5

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




let intervalTimer = setInterval(()=>{
    if (timer > 0) {
        timer--
        info_time.textContent = `TIME 0:${timer}`
    } else {
        clearInterval(intervalTimer)
    }
},1000)


let multiplier = 1;
let stackCounter = 0;

btnNo.onclick = () => {
    let inspector = score
    if (rand1 !== rand2){
        score += 50 * multiplier
    } else {
        multiplier = 1;
    }
    if (score > inspector){
        stackCounter++
    } else {
        stackCounter = 0;
    }
    if (stackCounter === 4) {
        multiplier += 1;
        stackCounter = 0;
    }
    change()
}
btnYes.onclick = () => {
    let inspector = score
    if (rand1 === rand2){
        score += 50 * multiplier
    } else {
        multiplier = 1;
    }
    if (score > inspector){
        stackCounter ++;
    } else {
        stackCounter = 0;
    }
    if (stackCounter === 4) {
        multiplier += 1;
        stackCounter = 0;
    }
    change()
}

setTimeout(()=>{
if (timer === 0){
    main.style.display = 'none'
    document.body.append(`SCORE - ${score}`)


}
},6000)



answer.append(btnYes,btnNo)
main.append(div, div2, answer)
document.body.append(main)
