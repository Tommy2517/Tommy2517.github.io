import {field} from '/games/colors/modules/main/field/field.js'
import {btnStyle, fieldStyle} from "../../styles/styles.js";
import {styleWriter} from "../../styles/styleWriter.js";
import {menuButton} from "./btns/menuBtns.js";
import {newGame} from "../game/game.js";

class Menu {
    menuGenerate = () => {
        field.innerHTML = ''
        field.append(menuButton.startGame())
        document.body.append(field)
        return field
    }
}
export const menu = new Menu()
