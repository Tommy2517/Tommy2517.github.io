import {field} from '/games/colors/modules/main/field/field.js'
import {menuButton} from "./btns/menuBtns.js";

class Menu {
    menuGenerate = () => {
        field.innerHTML = ''
        field.append(menuButton.startGame())
        document.body.append(field)
        // return field
    }
}
export const mainMenu = new Menu()
