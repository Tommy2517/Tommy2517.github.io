import {btnStyle, gameSection} from "../../styles/styles.js";
import {sections} from "./sections/sections.js";
import {gameButton} from "./btns/gameBtns.js";
import {tools} from "../../tools/tools.js";
import {field} from '../field/field.js'

class Game {
    startGame = () => {
        document.body.append(field)
        field.innerHTML = ''
        field.append(sections.toolbar(), sections.cards(), sections.controls())
    }
}
export const newGame = new Game()