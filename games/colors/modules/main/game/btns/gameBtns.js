import {styleWriter} from "../../../styles/styleWriter.js";
import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {field} from "../../field/field.js";
import {menu} from "../../menu/menu.js";

class GameButton {
    menu = () => {
        const btnMenu = tools.div()
        btnMenu.innerText='Menu'
        styleWriter.write([btnMenu], btnStyle)

        btnMenu.addEventListener('click',(eo) => {
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score++
            localStorage.setItem('colors', JSON.stringify(colors))
            field.innerHTML=''
            document.body.innerHTML = colors.score
            document.body.append(menu.menuGenerate())
        })
        return btnMenu
    }
}
export const gameButton = new GameButton()