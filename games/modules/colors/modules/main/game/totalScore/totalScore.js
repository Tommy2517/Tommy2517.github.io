import {tools} from "../../../tools/tools.js";
import {styleTotalScore} from "../../../styles/styles.js";
import {gameButton} from "../btns/gameBtns.js";
import {menuButton} from "../../menu/btns/menuBtns.js";
import {totalInfo} from "./totalInfo.js";
import {constants} from "../../../constants/const.js";

class TotalScore {

    total = () => {
        const total = tools.div('',styleTotalScore,'total')
        total.append(gameButton.mainMenu(), gameButton.score(),menuButton.startGame(),totalInfo.correct(),totalInfo.inCorrect())
        constants.correctAnswerCount = 0
        constants.incorrectAnswerCount = 0
        return total
    }
}
export const totalScore = new TotalScore();