import {btnStyle, fieldStyle} from "../../styles/styles.js";
import {styleWriter} from "../../styles/styleWriter.js";
import {field} from '/games/colors/modules/main/field/field.js'
import {newGame} from "../game/game.js";

class Menu {
    menuGenerate = () => {
        const field1 = field.fieldGenerate()
        const menu = `
                <button class="btnStyle" id="btnStart">Start</button>
                <button class="btnStyle" id="btnOptions">Options</button>
                <button class="btnStyle" id="btnScore">Score</button>
                <button class="btnStyle" id="btnOther">Other</button>
        `;
        field1.innerHTML = menu
        styleWriter.write([field1], fieldStyle)
        document.body.append(field1)

        styleWriter.write(
            document.getElementsByClassName('btnStyle'),
            btnStyle
        )
        const btnStart = document.getElementById('btnStart')
        btnStart.addEventListener('click', () => {
            console.log('click btn')
            document.body.innerHTML = ''
            newGame.startGame()
        })

        return field1

    }
}

export const menu = new Menu()
