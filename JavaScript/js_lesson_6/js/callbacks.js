let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// function filter(arr, callback) {
//     let nextArr = [];
//     for (const item of arr) {
//         if (callback(item)){
//             nextArr[nextArr.length] = item;
//         }
//     }
//     return nextArr;
// }
//
// console.log(filter(users, (item) => item.age < 30));

// users.forEach(function (u){   //первый аргумент - обьект массива.. второй аргумент - индекс обьекта.. третий - массив.
//
//     if (u.age < 30){
//         delete u.age//delete удаляет элемент обьекта
//         console.log(u)}
// })//метод перебирает элементы массива. элемент обозначается как аргумент колбэка
// console.log(users);

// let map= users.map(value => {return value}) // метод создает новый массив и копирует туда обьекты(value) по очереди
// console.log(map);

// let map = users.map((value,index) =>{
//     return {name: value.name, agr:value.age, stes:value.status, uedi:index+2}
// })//таким образом можно перенести объекты из одного массива в другой и добавить новое поле с своим значением
// console.log(map);

// let find = users.find(value => value.status === true)//находит первый совпадающий с условием элемент
// console.log(find);

// console.log(users.every(value => typeof value.name === 'string')) //возвращает булиан тру или фолс при условии
// что все элементы при одном условии тру. подобие '&&'

// console.log(users.some(value => value.status))//возвращает булиан тру или фолс при условии
// что хотя бы 1 элемент при одном условии тру. подобие '||'

// let nums = [123,243,645987,-124,2,41,1,-431,-143453];
// console.log(nums.sort((a, b) => a - b)); //сортирует массив от меньшего к большему
//
// console.log(users.sort((a, b) => {
//     if (a.name < b.name){
//         return -1
//     }
//     if (a.name > b.name){
//         return 1
//     }
//     if (a.name === b.name){
//         return 0
//     }
// }));
//берет по очереди 2 элемента(1 и 2, 2 и 3 итд...), сравнивает друг с другом.
// если выражение одрицательное, меняет элементы местами. если положительное или 0, не меняет.


///////Reduce//////////
// let nums = [11,22,33,44,55,66,77,88,99]; //у нас есть массив чисел
// let qwe = nums.reduce((accumulator, value) => { //вызываем к нему метод редюс.
//     // редюс принимает функцию. в эту функцию записываем 2 аргумента.
//     // первый- аккумулятор, в него будем складывать элементы массива.
//     // второй - вэлью, который по очередно принимает элементы массива.
//     if (value % 2 === 0) {   //пишем условие для проверки элемента массива nums.
//         accumulator.even.push(value);//если проверка элемента возвращает тру - то ложим наш элемент в ячейку акумулятора с массивом
//     }
//     if (value % 2 !== 0) {//пишем условие для проверки элемента массива nums.
//         accumulator.odd.push(value);//если проверка элемента возвращает тру - то ложим наш элемент в ячейку акумулятора с массивом
//     }
//     return accumulator; //возвращаем объект с обьектами ивен и одд внутри которых массивы с четными либо не четными числами.
// }, {even: [], odd: []});//это наш аккумулятор. в нем 2 обьекта в которые будем складывать наши элементы.
//
// console.log(qwe);


let nums = [11, 22, 33, 44, 55, 66, 77, 88, 99]; //у нас есть массив чисел
qwe = nums.reduce((acc, item) => { //первый аргумент - принимает элемент второго аргумента
    return acc + item;  //второ аргумент возвращяет результат каких то действий в первый аргумент
}, 0); //результат будет сохраняться в качестве числа.
console.log(qwe);
