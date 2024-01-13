import {styleWriter} from "../styles/styleWriter.js";

class Tools {
    div = (btnName,btnStyle) => {
        const div = document.createElement('div')
        if (btnStyle){
            styleWriter.write([div],btnStyle)
        }
        if (btnName){
            div.innerText =`${btnName}`
        }
        return div
    }
}
export const tools = new Tools
