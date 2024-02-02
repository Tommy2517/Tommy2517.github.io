import {tools} from "../../../tools/tools.js";
import {styleTotalScore} from "../../../styles/styles.js";
import {gameButton} from "../btns/gameBtns.js";
import {menuButton} from "../../menu/btns/menuBtns.js";

class TotalScore {

    total = () => {
        const total = tools.div('',styleTotalScore,'total')
        total.append(gameButton.score(),menuButton.startGame())
        return total
    }
}
export const totalScore = new TotalScore();