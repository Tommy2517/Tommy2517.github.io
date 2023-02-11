// let text = `
// <div><h2>Hello</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quia!</p></div>`;
// document.write(text)
//
// let text2 = `<div><h2>bye</h2> <p>Lorem ipsum dolor.</p></div>`
// document.write(text2)

// function foo() {
//     let text = `<div><h2>Hello</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quia!</p></div>`;
//     document.write(text)
// }
// let title = 'Hello';
// let text = 'Lorem'
// function foo() {
//     let html = `<div><h2>${title}</h2> <p>${text}</p></div>`;
//     document.write(html);
// }

// function foo(title,text) {
//     let html = `<div><h2>${title}</h2> <p>${text}</p></div>`;
//     document.write(html);
// }
// foo('qwertyyy', 'lkarngbolairnjboiar');
// foo('qwertyyy', 'lkarngbolairnjboiar');
// foo('qwertyyy', 'lkarngbolairnjboiar');


// let users = [
//     {name: 'vasil', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olga', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olga', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// function looper(arr) {
//     for (const element of arr){
//         console.log(element);
//     }
// }
// looper(users)
// looper(products)


// function calc(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//     return result;
// }
// calc(13,123)


// function calc(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//     return result;
// }
// console.log(calc(12,12))

// function calc(num1, num2) {
//     return num1 + num2;
// }
// let newVar = [calc(123,213),calc(213,33)]
// console.log(newVar)
// console.log(calc(12,12))
//
// let foo = {
//     age: calc(1,2)
// }
// console.log(foo)

// function superCalc(num1, num2) {
//     let obj = {
//         dif:num1-num2,
//         add:num1+num2,}
//     return obj;
// }
// let x = superCalc(11,222);
// console.log(x);

//{{{hoisting--- поднимает функциюв начало кода. тоесть - если функция будет вызвада перед ее
// обьявлением она не будет проигнорирована, интерпретатор подождет пока будет найдено
// обьявление её, тогда выведет результат этой функции. другими словани функцией можно
// пользоваться до её обьявления}}}

