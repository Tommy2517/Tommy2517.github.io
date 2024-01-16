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
        const score = tools.div('Menu', btnStyle,'score')
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
            document.getElementById('toolbar').append(this.menu(), this.score())
            const toolbar = sections.toolbar()
            toolbar.append(this.menu(), this.score())
        })
        return score
    }


    /////////////////section cards////////////////////
    card1 = () => {
        const cardStyle = this.changerStyle()
        const card1 = tools.div(cardStyle.name, btnStyle, 'card1')
        styleWriter.write([card1], cardStyle)
        card1.style.color = ''
        return card1
    }
    card2 = () => {
        const cardStyle = this.changerStyle()
        const card2 = tools.div(cardStyle.name, btnStyle, 'card2')
        styleWriter.write([card2], this.changerStyle())
        return card2
    }


    /////////////////section controls////////////////////
    btnYes = () => {
        const btnYes = tools.div('yes', btnStyle)
        btnYes.onclick = () => {
            const card1 = document.getElementById('card1')
            const card2 = document.getElementById('card2')

            if (card1.innerText === card2.style.name) {
                let colors = JSON.parse(localStorage.getItem('colors'))
                colors.score += reward
                localStorage.setItem('colors', JSON.stringify(colors))

                const score = document.getElementById('score')
                score.innerText = `${colors.score}`
            }

            const cards = document.getElementById('cards')
            cards.innerHTML = ''
            cards.append(this.card1(), this.card2())
        }
        return btnYes
    }

    btnNo = () => {
        const btnNo = tools.div('no', btnStyle)
        btnNo.onclick = () => {

            const card1 = document.getElementById('card1')
            const card2 = document.getElementById('card2')
//todo исправить дублирование
            if (card1.innerText === card2.style.name) {
                let colors = JSON.parse(localStorage.getItem('colors'))
                colors.score += reward
                localStorage.setItem('colors', JSON.stringify(colors))

                const score = document.getElementById('score')
                score.innerText = `${colors.score}`
            }

            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score += reward
            localStorage.setItem('colors', JSON.stringify(colors))

            const score = document.getElementById('score')
            score.innerText = colors.score;

            const cards = document.getElementById('cards')
            cards.innerHTML = ''
            cards.append(this.card1(), this.card2())
        }
        return btnNo
    }


    changerStyle = () => {
        return constants.colorValues[Math.floor(Math.random() * 4)]
    }
}

export const gameButton = new GameButton()