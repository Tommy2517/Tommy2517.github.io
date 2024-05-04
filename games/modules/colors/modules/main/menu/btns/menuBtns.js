import {btnStyle} from "../../../styles/styles.js";
import {tools} from "../../../tools/tools.js";
import {newGame} from "../../game/game.js";

class MenuButtons {
    startGame = () =>{
        const btnStart = tools.div('Start',btnStyle)

        btnStart.addEventListener('click', () => {
            // document.body.innerHTML = ''
            newGame.startGame()
        })

        return btnStart
    }
    exitGame = () =>{
        const btnExit = tools.div('Exit',btnStyle)

        btnExit.addEventListener('click', () => {
            // document.body.innerHTML = ''
            // const mainDiv = document.getElementById('mainDiv')
            document.getElementById('field').remove()
        })

        return btnExit
    }
}
export const menuButton = new MenuButtons()