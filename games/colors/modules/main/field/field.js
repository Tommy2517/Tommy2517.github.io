
import {menu} from "/games/colors/modules/main/menu/menu.js";

import {azz, fieldStyle} from "../../styles/styles.js";

class Field {
    fieldGenerate = () => {
        const field = document.createElement('div')
        const generate = () => {
            for (let prop in fieldStyle) {
                field.style[prop] = fieldStyle[prop];
            }
        }
        menu.menuGenerate(field)
        generate()
    }
}
export const field = new Field()

