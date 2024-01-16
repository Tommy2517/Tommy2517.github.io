import {styleWriter} from "../../../styles/styleWriter.js";
import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {field} from "../../field/field.js";
import {mainMenu} from "../../menu/mainMenu.js";
import {constants, reward} from "../../../constants/const.js";
import {sections} from "../sections/sections.js";

class GameButton {
    /////////////////section toolbar////////////////////
    menu = () => {
        const btnMenu = tools.div('Menu', btnStyle)
        btnMenu.style.width = '75px'
        btnMenu.style.height = '25px'
        btnMenu.style.margin = '2px'

        btnMenu.addEventListener('click', (eo) => {
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score++
            localStorage.setItem('colors', JSON.stringify(colors))

            field.innerHTML = ''
            document.body.innerHTML = ''
            mainMenu.menuGenerate()
        })
        return btnMenu
    }
    score = () => {
        const score = tools.div('Menu', btnStyle)
        score.style.width = '75px'
        score.style.height = '25px'
        score.style.margin = '2px'
        score.style.border = '2px solid #444444'
        score.style.background = ''
        score.id = 'score'

        score.innerText = `${JSON.parse(localStorage.getItem('colors')).score}`
        score.addEventListener('click',()=>{
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score -= reward
            localStorage.setItem('colors', JSON.stringify(colors))

            document.getElementById('toolbar').innerHTML = ''
            const toolbar = sections.toolbar()
            toolbar.append(gameButton.menu(), gameButton.score())
            console.log(toolbar)
        })
        return score
    }
    /////////////////section cards////////////////////
    card1 = () => {
        const card1 = tools.div('red', btnStyle, 'card1')
        styleWriter.write([card1], this.changerStyle())
        card1.style.color = ''
        return card1
    }
    card2 = () => {
        const card2 = tools.div('blue', btnStyle, 'card2')
        styleWriter.write([card2], this.changerStyle())
        return card2
    }
    /////////////////section controls////////////////////
    btnYes = () => {
        const btnYes = tools.div('yes', btnStyle)
        btnYes.onclick = () => {
            const card1 = document.getElementById('card1')
            const card2 = document.getElementById('card2')
            let colors = JSON.parse(localStorage.getItem('colors'))
            // colors.score -= reward
            // localStorage.setItem('colors', JSON.stringify(colors))

            if (card1.innerText === card2.style.name) {
                let colors = JSON.parse(localStorage.getItem('colors'))
                colors.score += reward
                localStorage.setItem('colors', JSON.stringify(colors))
            }

            console.log(card1.innerText, card2.style.name, JSON.parse(localStorage.getItem('colors')).score);

            const score = document.getElementById('score')
            score.innerText = `${colors.score}`;

            const cards = document.getElementById('cards')
            cards.innerHTML = ''
            cards.append(this.card1(), this.card2())

            // console.log(card1.innerText,'--card1 inner text')
            // console.log(card1.style.name,'--card1  styleName (color)')
            // console.log(card1.textContent,'--textContent1')
            // console.log('====================================')
            // console.log(card2.innerText,'--card2 inner text')
            // console.log(card2.style.name,'--card2 styleName (color)')
            // console.log(card2.textContent,'--textContent2')
        }
        return btnYes
    }
    btnNo = () => {
        const btnNo = tools.div('no', btnStyle)
        btnNo.onclick = () => {

            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score += reward
            localStorage.setItem('colors', JSON.stringify(colors))

            const score = document.getElementById('score')
            score.innerText = `${colors.score}`;

        }
        return btnNo

    }
    changerStyle = () => {
        return constants.colorValues[Math.floor(Math.random() * 4)]
    }
}

export const gameButton = new GameButton()