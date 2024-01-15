import {styleWriter} from "../styles/styleWriter.js";

class Tools {
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
}
export const tools = new Tools
