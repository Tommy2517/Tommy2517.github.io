import {btnStyle} from "../../styles/styles.js";


class Menu {
    menuGenerate = (field) => {
        const menu = `
            <div class="myDiv">
                <button class="btnStyle" id="btnStyle1">Start</button>
                <button class="btnStyle" id="btnStyle2">Options</button>
                <button class="btnStyle" id="btnStyle3">Score</button>
                <button class="btnStyle" id="btnStyle4">Other</button>
            </div>
        `;
        field.innerHTML = menu
        document.body.append(field)
        for (const item of document.getElementsByClassName('btnStyle')) {
            for (let key in btnStyle) {
                item.style[key] = btnStyle[key]
            }
        }
    }
}
export const menu = new Menu()
