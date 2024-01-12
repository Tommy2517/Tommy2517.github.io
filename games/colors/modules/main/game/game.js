import {field} from '../field/field.js'
import {gameButton} from "./btns/gameBtns.js";
import {tools} from "../../tools/tools.js";

class Game {
    startGame = () => {
        document.body.append(field)
        const toolbar = tools.div()
        const cards = tools.div()
        const controls = tools.div()
        toolbar.append(gameButton.menu())
        field.append(toolbar, cards, controls)
    }
}
export const newGame = new Game()
const startGame = () => {
}