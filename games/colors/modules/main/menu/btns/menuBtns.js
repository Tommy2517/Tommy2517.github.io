import {styleWriter} from "../../../styles/styleWriter.js";
import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {newGame} from "../../game/game.js";

class MenuButtons {
    startGame = () =>{
        const btnStart = tools.div('New Game',btnStyle)

        btnStart.addEventListener('click', () => {
            document.body.innerHTML = ''
            newGame.startGame()
        })

        return btnStart
    }
}
export const menuButton = new MenuButtons()