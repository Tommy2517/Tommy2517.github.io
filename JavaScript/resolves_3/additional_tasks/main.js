// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// {
//     let i = [];
//     let j = 0;
//     while (i.length < 5) {
//         i[i.length] = (j + 2) * 3;
//         j += 2;
//     }
//     console.log(i)
//     while (i.length >= 5 && i.length < 10) {
//         i[i.length] = 'qwe';
//     }
//     console.log(i);
//     while (i.length >= 10 && i.length < 15) {
//         i[i.length] = 5 > 0;
//     }
//     console.log(i);
// }


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let i = [2,17,13,6,22,31,45,66,100,-18];
let j = 0;          //рахувач для вайлу
let n = i.length-1; //рахувач для вайлу

// 1. перебрати його циклом while
// while (j < i.length){
//     console.log(i[j])
//     j++;}
//---------------------------------------<<
// while (n >= 0) {
//     console.log(i[n]);
//     n--;
// }
//================================================================================================

//     2. перебрати його циклом for
// for (j; j<i.length;j++) {
//     console.log(i[j]);
// }
//---------------------------------------<<
// for (n;n>=0;n--){
//     console.log(i[n]);
// }
//================================================================================================

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// while (j < i.length){
//     if (j % 2 != 0){
//     console.log(i[j])}
//     j++;}
//---------------------------------------<<
// while (n >=0){
//     if (n % 2 !==0) {
//         console.log(i[n]);
//     }n--;}
//================================================================================================

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let k = 0; k < i.length; k++) {
//     if (k % 2 != 0){
//         console.log(i[k])}}
//---------------------------------------<<
// for (let k = i.length - 1; k >= 0; k--) {
//     if (k % 2 !=0){
//     console.log(i[k]);}}
//================================================================================================

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//  while (j < i.length){
//      if (i[j] % 2 == 0){
//      console.log(i[j])}
//      j++;}
//---------------------------------------<<
// while (n >= 0) {
//     if (i[n] % 2 ==0) {
//         console.log(i[n]);
//     }n--;}
//================================================================================================

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let k = 0; k < i.length; k++) {
//     if (i[k] % 2 == 0) {
//         console.log(i[k]);
//     }
// }
//---------------------------------------<<
// for (let k = i.length - 1; k >= 0; k--) {
//     if (i[k] % 2 == 0) {
//         console.log(i[k]);
//     }
// }
//================================================================================================

// 7. замінити кожне число кратне 3 на слово "okten"
// while (j < i.length) {
//     if (i[j] % 3 == 0) {
//         i[j] = 'okten';
// }console.log(i[j]);
//     j++;}
//---------------------------------------<<
// while (n >= 0) {
//     if (i[n] % 3 ==0){
//         i[n] = 'okten';
//     }
//     console.log(i[n]);
//     n--;
// }
//================================================================================================

// 8. вивести масив в зворотньому порядку.
// for (let k = i.length - 1; k >= 0; k--) {
//     console.log(i[k]);}
//================================================================================================

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



//================================================================================================





//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор













//hotkeys-------alt+return=injectLanguageOfReference