import {sections} from "./sections/sections.js";
import {field} from '../field/field.js'
import {mainMenu} from "../menu/mainMenu.js";
import {constants} from "../../constants/const.js";
import {gameButton} from "./btns/gameBtns.js";
import {menuButton} from "../menu/btns/menuBtns.js";
import {totalScore} from "./totalScore/totalScore.js";

class Game {
    timer = null
    startGame = () => {
        field.innerHTML = ''
        field.append(sections.toolbar(), sections.cards(), sections.controls())
        document.body.append(field)
        this.timer = setTimeout(() => {
            this.totalScore()
            // document.getElementById('controls').style.pointerEvents = "none"
            // gameButton.remover()
            // mainMenu.menuGenerate();
        }, constants.gameTime * 1000);
    }
    totalScore = () => {
        field.innerHTML = ''
        field.append(totalScore.total())
        clearTimeout(this.timer)
        // field.append(menuButton.continue)
    }
}

export const newGame = new Game()