import {menu} from "/games/colors/modules/main/menu/menu.js";

import {fieldStyle} from "../../styles/styles.js";
import {styleWriter} from "../../styles/styleWriter.js";

class Field {
    fieldGenerate = () => {
        const field = document.createElement('div')

        styleWriter.write([field], fieldStyle)
        menu.menuGenerate(field)
    }
}
export const field = new Field()

