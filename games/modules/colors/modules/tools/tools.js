import {styleWriter} from "../styles/styleWriter.js";
import {colors, constants} from "../constants/const.js";

class Tools {
    //create div element args-innerText,Style,id
    div = (btnName, btnStyle, btnId) => {
        const div = document.createElement('div')
        if (btnName) {
            div.innerText = `${btnName}`
        }
        if (btnStyle) {
            styleWriter.write([div], btnStyle)
        }
        if (btnId) {
            div.id = `${btnId}`
        }
        return div

    }

    timer = () => {
        const timer = setTimeout(() => {

            }, constants.gameTime * 1000)
    }
    answerCorrect = () => {
        constants.correctAnswerCount++
        const correct = constants.correctAnswerCount

        if (constants.stackCounter === 4) {
            constants.stackCounter = 0
            constants.multiplier++
        }
        // let colors = JSON.parse(localStorage.getItem('colors'))
        // colors.score += constants.reward
        //     * constants.multiplier
        // localStorage.setItem('colors', JSON.stringify(colors))

        const score = document.getElementById('score')
        score.innerText = `${correct}`
    }
    answerInCorrect = () => {
        constants.incorrectAnswerCount++
        constants.stackCounter = 0
        constants.multiplier = 1
    }


}

export const tools = new Tools
