import {styleWriter} from "../../../styles/styleWriter.js";
import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {newGame} from "../../game/game.js";

class MenuButton {
    startGame = () =>{
        const btnStart = tools.div('Start',btnStyle)

        btnStart.addEventListener('click', () => {
            document.body.innerHTML = ''
            newGame.startGame()
        })

        return btnStart
    }
}
export const menuButton = new MenuButton()