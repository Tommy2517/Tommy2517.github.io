import {btnStyle} from "../../styles/styles.js";
import {styleWriter} from "../../styles/styleWriter.js";
import {newGame} from "../game/game.js";

class Menu {
    menuGenerate = (field) => {
        const menu = `
                <button class="btnStyle" id="btnStart">Start</button>
                <button class="btnStyle" id="btnOptions">Options</button>
                <button class="btnStyle" id="btnScore">Score</button>
                <button class="btnStyle" id="btnOther">Other</button>
        `;
        field.innerHTML = menu

        document.body.append(field)

        styleWriter.write(
            document.getElementsByClassName('btnStyle'),
            btnStyle
        )
        const btnStart = document.getElementById('btnStart')
        btnStart.onclick = () => {
            console.log('click btn')
            document.getElementById('btnStart').style.background = 'gold'
            field.innerHTML = ''
            field.append(newGame.startGame())
        }


    }
}
export const menu = new Menu()
