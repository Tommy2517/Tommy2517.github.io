import {styleWriter} from "../../../styles/styleWriter.js";
import {colors, constants} from "../../../constants/const.js";
import {btnStyle} from "../../../styles/styles.js";
import {sections} from "../sections/sections.js";
import {mainMenu} from "../../menu/mainMenu.js";
import {tools} from "../../../tools/tools.js";
import {field} from "../../field/field.js";
import {newGame} from "../game.js";

class GameButton {
    /////////////////section toolbar////////////////////

    mainMenu = () => {
        const mainMenuBtn = tools.div('Main Menu', btnStyle)
        mainMenuBtn.onclick = () => {
            mainMenu.menuGenerate()
        }
        return mainMenuBtn
    }

    menu = () => {
        const btnMenu = tools.div('Menu', btnStyle)
        btnMenu.style.width = '75px'
        btnMenu.style.height = '25px'
        btnMenu.style.margin = '2px'

        btnMenu.addEventListener('click', () => {
            console.log(newGame.timer)
            clearTimeout(newGame.timer)
            field.innerHTML = ''
            // document.body.innerHTML = ''
            mainMenu.menuGenerate()
        })
        return btnMenu
    }
    score = () => {
        const score = tools.div('Menu', btnStyle, 'score')
        score.style.width = '75px'
        score.style.height = '25px'
        score.style.margin = '2px'
        score.style.border = '2px solid #444444'
        score.style.background = ''
        score.id = 'score'
        score.contentEditable = 'true'
        score.innerText = `${constants.correctAnswerCount}`
        // score.innerText = `${JSON.parse(localStorage.getItem('colors')).score}`
        score.addEventListener('keydown', (eo) => {
            if (eo.key === 'e'){
                console.log(123)
            }
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score = 0
            localStorage.setItem('colors', JSON.stringify(colors))

            document.getElementById('toolbar').innerHTML = ''
            document.getElementById('toolbar').append(this.menu(), this.score())
            const toolbar = sections.toolbar()
            toolbar.append(this.menu(), this.score())
        })
        this.getterStyle()
        return score
    }


    /////////////////section cards////////////////////!BTN

    card1 = () => {
        const cardStyle = this.bar[Math.floor(Math.random() * 2)]
        const card1 = tools.div(cardStyle.name, btnStyle, 'card1')
        styleWriter.write([card1], cardStyle)
        card1.style.color = ''
        card1.style.fontSize = '1.7em'
        card1.style.fontWeight = 'bold'
        return card1
    }
    card2 = () => {
        // const cardStyle = this.changerStyle()
        const card2 = tools.div(
            constants.colorValues[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 2)].name,
            btnStyle,
            'card2')
        styleWriter.write([card2], this.bar[Math.floor(Math.random() * 2)])//yyyyy
        card2.style.fontSize = '1.7em'
        card2.style.fontWeight = 'bold'
        return card2
    }
    bar = {}
    getterStyle = () =>{
        this.bar =  constants.colorValues[Math.floor(Math.random() * 2)]

    }

    /////////////////section controls////////////////////
    btnYes = () => {
        const btnYes = tools.div('yes', btnStyle,'btnYes')
        btnYes.onclick = () => {

            this.fooYes()
        }
        document.addEventListener('keydown',this.foo,false)
        return btnYes
    }
    foo = (eo) => {
        if (eo.key === 'q') this.fooYes()
        else if (eo.key === 'w') this.fooNo()
    }
    remover = ()=>{
        document.removeEventListener('keydown',this.foo,false)
        console.log('remove Listener q')
    }
    fooYes=()=>{
        const card1 = document.getElementById('card1')
        const card2 = document.getElementById('card2')

        if (card1.innerText === card2.style.name) {
            tools.answerCorrect()

        }
        else {
            tools.answerInCorrect()
        }

        const cards = document.getElementById('cards')
        cards.innerHTML = ''
        cards.append(this.card1(), this.card2())
        this.getterStyle()
    }
    btnNo = () => {
        const btnNo = tools.div('no', btnStyle)
        btnNo.onclick = () => {
            this.fooNo()
        }
        return btnNo
    }

    fooNo=()=>{
        const card1 = document.getElementById('card1')
        const card2 = document.getElementById('card2')

        if (card1.innerText !== card2.style.name) {
            tools.answerCorrect()
        }
        else {
            tools.answerInCorrect()
        }

        const cards = document.getElementById('cards')
        cards.innerHTML = ''
        cards.append(this.card1(), this.card2())
        this.getterStyle()
    }



}

export const gameButton = new GameButton()