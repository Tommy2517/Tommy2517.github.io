import {tools} from "../../../tools/tools.js";
import {btnStyle, card1, card2, gameSection} from "../../../styles/styles.js";
import {gameButton} from "../btns/gameBtns.js";
import {reward} from "../../../constants/const.js";

class Sections {
    toolbar = () => {
        const toolbar = tools.div('', gameSection,'toolbar')
        toolbar.append(gameButton.menu(), gameButton.score())

        return toolbar
    }

    cards = () => {
        const cards = tools.div('', gameSection, 'cards')
        //TODO style substitute заменитель
        cards.style.justifyContent = 'center'
        cards.style.alignItems = 'center'
        cards.style.flexDirection = 'column'
        cards.style.rowGap = '2px'

        cards.append(gameButton.card1(), gameButton.card2())

        return cards
    }

    controls = () => {
        const controls = tools.div('', gameSection)

        controls.style.alignItems = 'flex-end'
        controls.append(gameButton.btnYes(), gameButton.btnNo())

        return controls
    }
}


export const sections = new Sections()