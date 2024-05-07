import {field} from '/games/modules/colors/modules/main/field/field.js'
import {menuButton} from "./btns/menuBtns.js";

class Menu {
    menuGenerate = () => {
        field.innerHTML = ''
        field.append(menuButton.startGame(),menuButton.exitGame())
        return field
    }
}
export const mainMenu = new Menu()
