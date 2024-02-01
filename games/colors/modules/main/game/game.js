import {sections} from "./sections/sections.js";
import {field} from '../field/field.js'
import {mainMenu} from "../menu/mainMenu.js";
import {constants} from "../../constants/const.js";
import {gameButton} from "./btns/gameBtns.js";

class Game {
    timer = null
    startGame = () => {
        field.innerHTML = ''
        field.append(sections.toolbar(), sections.cards(), sections.controls())
        document.body.append(field)
        this.timer = setTimeout(() => {
            document.getElementById('field').style.pointerEvents = "none"
            gameButton.remover()
            // mainMenu.menuGenerate();
        }, constants.gameTime * 1000);
    }
}

export const newGame = new Game()