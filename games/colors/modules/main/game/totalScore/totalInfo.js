import {tools} from "../../../tools/tools.js";
import {btnStyle} from "../../../styles/styles.js";
import {constants} from "../../../constants/const.js";

class TotalInfo {
    correct = () => {
       const correct = tools.div('',btnStyle,'correct')
        correct.innerText=`correct - ${constants.correctAnswerCount}`
        return correct
    }
    inCorrect = () => {
        const inCorrect = tools.div('',btnStyle,'inCorrect')
        inCorrect.innerText = `inCorrect - ${constants.incorrectAnswerCount}`
        return inCorrect
    }
}
export const totalInfo = new TotalInfo()