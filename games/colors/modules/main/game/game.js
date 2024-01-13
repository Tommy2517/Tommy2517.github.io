import {field} from '../field/field.js'
import {gameButton} from "./btns/gameBtns.js";
import {tools} from "../../tools/tools.js";
import {btnStyle, gameSection} from "../../styles/styles.js";
import {sections} from "./sections/sections.js";

class Game {
    startGame = () => {
        document.body.append(field)

        field.append(sections.toolbar(), sections.cards(), sections.controls())
    }
}
export const newGame = new Game()