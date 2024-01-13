import {styleWriter} from "../../../styles/styleWriter.js";
import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {field} from "../../field/field.js";
import {mainMenu} from "../../menu/mainMenu.js";

class GameButton {
    menu = () => {
        const btnMenu = tools.div('Menu',btnStyle)
        btnMenu.style.width = '75px'
        btnMenu.style.height = '25px'
        btnMenu.style.margin = '2px'

        btnMenu.addEventListener('click',(eo) => {
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score++
            localStorage.setItem('colors', JSON.stringify(colors))

            field.innerHTML=''
            document.body.innerHTML = ''
            mainMenu.menuGenerate()
        })
        return btnMenu
    }
    score = () =>{
        const score = tools.div('Menu',btnStyle)
        score.style.width = '75px'
        score.style.height = '25px'
        score.style.margin = '2px'
        score.style.border = '2px solid #444444'
        score.style.background = ''

        score.innerText = `${JSON.parse(localStorage.getItem('colors')).score}`

        return score
    }
}
export const gameButton = new GameButton()