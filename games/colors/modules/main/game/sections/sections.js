import {tools} from "../../../tools/tools.js";
import {btnStyle, gameSection} from "../../../styles/styles.js";
import {gameButton} from "../btns/gameBtns.js";
import {reward} from "../../../constants/const.js";
// import {reward} from "../../../constants/const.js";

class Sections {
    toolbar = () => {
        const toolbar = tools.div('', gameSection)
        toolbar.append(gameButton.menu(), gameButton.score())
        return toolbar
    }
    cards = () => {

        const cards = tools.div('', gameSection)
        //TODO style substitute заменитель
        cards.style.justifyContent = 'center'
        cards.style.alignItems = 'center'
        cards.style.flexDirection = 'column'
        const card1 = tools.div('red', btnStyle)

        const card2 = tools.div('blue', btnStyle)
        cards.append(card1, card2)
        return cards
    }
    controls = () => {
        const controls = tools.div('', gameSection)
        controls.style.alignItems = 'flex-end'
        const btnYes = tools.div('yes', btnStyle)
        const btnNo = tools.div('no', btnStyle)
        controls.append(btnYes, btnNo)
        console.log(controls)
        return controls
    }
}

class Mechanics {
    refresh = (card1, card2) => {
        if (card1 === card2) {
            let colors = JSON.parse(localStorage.getItem('colors'))
            colors.score += reward

            localStorage.setItem('colors', JSON.stringify(colors))
        }
    }
    func = () => {
        const q = Math.random()
        console.log(q)
    }
}
new Mechanics().func()

export const sections = new Sections()