import {menu} from "/games/colors/modules/main/menu/menu.js";
import {styleWriter} from "../../styles/styleWriter.js";
import {fieldStyle} from "../../styles/styles.js";

// class Field {
//     fieldGenerate = () => {
//          const field = document.createElement('div');
//         return field ;
//     }
// }
// export const field = new Field()
const field = document.createElement('div')
styleWriter.write([field], fieldStyle)
console.log(field,'loggg')
export {field}
