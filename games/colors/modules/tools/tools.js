import {styleWriter} from "../styles/styleWriter.js";
import {reward} from "../constants/const.js";

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

    //onClick Function
    // cardInspector = () => {
    //     const card1 = document.getElementById('card1')
    //     const card2 = document.getElementById('card2')
    //
    //     if (card1.innerText === card2.style.name) {
    //         let colors = JSON.parse(localStorage.getItem('colors'))
    //         colors.score += reward
    //         localStorage.setItem('colors', JSON.stringify(colors))
    //
    //         const score = document.getElementById('score')
    //         score.innerText = `${colors.score}`
    //     }
    //
    //     const cards = document.getElementById('cards')
    //     cards.innerHTML = ''
    //     cards.append(this.card1(), this.card2())
    // }

}
export const tools = new Tools
