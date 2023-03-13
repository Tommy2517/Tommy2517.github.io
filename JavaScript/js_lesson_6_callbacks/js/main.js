document.write(`<h1 style="color: yellowgreen">hi</h1>`)
///////////////////////////////// методы строк  ////////////////////////////////////////
let slug = 'https://owu.com.ua/'; // каждая ссылка это строка 'string'
console.log(slug.concat('hello')); // присоединяет строку к переменной s подобно "+";
//не изменяет переменную. для того что бы получить данную строку измененной с помощью concat нужна новая переменная
let newS = slug.concat('/hello')
console.log(newS);
console.log(slug[12]); //выведет 12й символ. строка - это массив символов.
'asdfsadfas' //такого рода строка это примитив

let upS = slug.toUpperCase();// применяет верхний регистр
console.log(upS);

let lowS = upS.toLowerCase();//применяет нижний регистр
console.log(lowS)

console.log(slug.startsWith('http:')); //проверяет начинается ли переменная с данных символов
console.log(slug.endsWith('ua')); // проверяет заканчивается ли переменная данными символами

console.log(slug.includes('ua'));//проверяет наличие символа или последовательности символа в строке


console.log(slug.substring(2,12));//обрезает сроку начиная с 1го арг. до 2го арг.если он есть. не включительно


console.log(slug.indexOf('.'));//показывает индекс этого символа в слове(только первого попавшегося)
console.log(slug.lastIndexOf('.'));//показывает индекс данного символа с конца(только последнего)
console.log(slug.charAt(1));//показывает символ данного индекса

console.log(slug.replaceAll('/', ''));//заменяет первый аргумент на второй(может быть

console.log(slug.split('.'));//разделяет строку указанным символом.помещает отрезки в массив отдельными элементами



///////////////////////////////// методы массивов  ////////////////////////////////////////

let arr = [11,22,33,44,55,66,77,true];
console.log(Array.isArray(arr));//проверяет является ли элемент массивом.

let q = arr.push('qweqwe'); //добавляет в конец массива новый элемент.
console.log(arr,q);

let w = arr.push('qwaeqwe'); //добавляет в конец массива новый элемент.
console.log(arr,w);


let pop = arr.pop(); //удаляет последний элемент из массива. удаленный элемент остается в pop можно вернуть в переменную.
console.log(arr,pop);

arr.unshift('zxcvvv');//добавляет новый жлемент в начало массива.
console.log(arr);

let shift = arr.shift(); //удаляет первый элемент из массива. удаленное остается в shift можно записать в переменную
console.log(shift);
console.log(arr);

let splice = arr.splice(2,2,'qwe'); //удаляет элементы внутри массива начиная с..., колво...., замена на.
console.log(arr);//splice не будет работать со строкойпотому что это метод массива.
console.log(splice)//содержит удаленные элементы в новом массиве.

let slice = arr.slice(1,3);//без аргументов копирует весь массив в новый. с аргументами копирует от
// и до
console.log(slice);

let concat = arr.concat(123,234,654); // добавляет новые элементы в конец массива
console.log(concat);

console.log(arr.reverse()); // переставляет элементы в масиве задом наперед
console.log(arr)

console.log(arr.indexOf(77));//показывает какой индекс у элемента

console.log(arr.includes(11)); //проверяет есть ли этот элемент
console.log('qweqweqweewq'.includes('qw'));//проверяет наличие символа или последовательности символа в строке

console.log('---------------Callbacks-----------------')