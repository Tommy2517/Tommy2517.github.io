import {styleWriter} from "../styles/styleWriter.js";
import {constants} from "../constants/const.js";

class Tools {
    //create div element args-innerText,Style,id
    div = (btnName,btnStyle,btnId) => {
        const div = document.createElement('div')
        if (btnStyle){
            styleWriter.write([div],btnStyle)
        }
        if (btnName){
            div.innerText =`${btnName}`
        }
        if (btnId){
            div.id =`${btnId}`
        }
        return div

    }

answerCorrect = () => {
    constants.stackCounter++

    if (constants.stackCounter === 4) {
        constants.stackCounter = 0
        constants.multiplier++
    }

    let colors = JSON.parse(localStorage.getItem('colors'))
    colors.score += constants.reward
        // * constants.multiplier
    localStorage.setItem('colors', JSON.stringify(colors))

    const score = document.getElementById('score')
    score.innerText = `${colors.score}`
    }
    answerInCorrect = () => {
        constants.stackCounter = 0
        constants.multiplier = 1
    }

}
export const tools = new Tools
