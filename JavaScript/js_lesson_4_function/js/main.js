// let text = `
// <div><h2>Hello</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quia!</p></div>`;
// document.write(text)
//
// let text2 = `<div><h2>bye</h2> <p>Lorem ipsum dolor.</p></div>`
// document.write(text2)

//====================================================================================================================

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

//====================================================================================================================

function foo(title,text) {
    let html = `<div><h2>${title}</h2> <p>${text}</p></div>`;
    document.write(html);
}
foo('qwertyyy', 'lkarngbolairnjboiar');
foo('qwertyyy', 'lkarngbolairnjboiar');
foo('qwertyyy', 'lkarngbolairnjboiar');

//====================================================================================================================

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


//====================================================================================================================

// function calc(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//     document.write(result);
//     // return result;
// }
// calc(13,123)

//====================================================================================================================

// function calc(num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//     return result;
// }
// console.log(calc(12,12))

//====================================================================================================================

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

//====================================================================================================================

// function superCalc(num1, num2) {
//     let obj = {
//         dif:num1-num2,
//         add:num1+num2,}
//     return obj;
// }
// let x = superCalc(11,222);
// console.log(x);

//====================================================================================================================

//{{{hoisting--- ?????????????????? ???????????????? ???????????? ????????. ???????????? - ???????? ?????????????? ?????????? ?????????????? ?????????? ????
// ?????????????????????? ?????? ???? ?????????? ??????????????????????????????, ?????????????????????????? ???????????????? ???????? ?????????? ??????????????
// ???????????????????? ????, ?????????? ?????????????? ?????????????????? ???????? ??????????????. ?????????????? ?????????????? ?????????????? ?????????? ????????????????
// ???? ???? ????????????????????}}}

//====================================================================================================================

// function calc() {
//     console.log(arguments);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments[4]);
// }
// calc(1,2,3,4,5)

// =======================================================================================================

// ?????????????? ???????????? ???????????????? ????????????????????=======================================================================================================

// function calc() {
//     let  basket = 0;
//     for (const num of arguments) {
//         basket = basket + num;
//     }
//     return basket;
// }
// console.log(calc(1, 22, 35, 411, 5));


//====================================================================================================================

// rest argument ?????????????????? - "..." =====
// function calc2 (a,b,...r) {//'a' ?? 'b' ?????????? ?????????????????? ???????????? ?????? ???????????????? ??????????????. ?????????????????? ???????????????? ?????????????????? ?? ...r
//    console.log(r)
// }
// calc2(1,2,3,4,5,6,7,8,9)   //???????????? ?????????????????? ???????????????? ?? ???????????? ?? ?????????????? ?????????????????? "..."
// ?????????????????????? ?????????? ???????? ?????????? ?????????????? ?? ????????????????, ???????????? ?? ????. calc2(1,[],{},true,undefined.....)\
// rest argument ???????????? ???????? ???????????? ????????????.
//====================================================================================================================

//??????????????????========
//====================================================================================================================
//outer - ???????????????????? ???????????????????? ?????????????? "inner" ?????????????? ?? ???????? ?????????????? ???????????????????? 100;
//???????????? 1 :
//function outer () {
//    function inner() {
//        return 100;
//    }
//    return inner();
//}
//console.log(outer())

//???????????? 2 : ???????????? ???? ???? ?????? ?? ???????????????????? ???????????? ???? ???????????????? ?????????????? inner ???????????? return (self enounge function)
// function outer ()  {
//
//     return (function inner() {
//         return 100;
//     }());
// }
// console.log(outer())

//====================================================================================================================
// function outer(inner) {
//     return inner();
// }
//
// let outer1 = outer(function () {
//     return 100;
// })
// console.log(outer1)

// function outer() {
//     let x = 100;
//     function inner() {
//         return x;
//     }
//     return inner;
// }
//
// console.log(outer()())

//?????????????????? - ?????? ?????????????????????? ?????????????? ?????????????????? ???? ?????????????? ????????????????????.
//?????????????????? ???????????????????????? ?????? ?????????????? ???? ???????????? ?????????? ?? ?????????????????????? ?????????????? ???????????????????? ?? ???? ?????????????? ??????????????????

// function userCreator(name, age) {
//     let user = {name: name, age: age,}
//     return user;
// }
//
// let u1 = userCreator('vasya', 25);
//
// console.log(u1);
// u1.name = 'qweqwe'
// console.log(u1);

// function userCreator(name, age) {
//     let user = {name: name, age: age,}
//     return {
//         getName: function () {
//             return user.name
//         },
//         setName: function (name) {
//             if (typeof name === 'string') {
//                 user.name = name;
//             } else {
//                 console.log('qweqweqweqweqwe');
//             }
//         },
//         getAge: function () {
//             return user.age
//         },
//         setAge: function (newAge) {
//             if (newAge > user.age ){
//                 user.age = newAge;
//             }
//             else {
//                 console.log('NoNoNoNoNo!!!')}
//         },
//     };
// }
//
// let u1 = userCreator('vasya', 25);
// console.log(u1);
// u1.setName(true);
// let name = u1.getName();
// console.log(name)
// let age = u1.getAge();
// console.log(age);
// u1.setAge(26);
// age = u1.getAge()
// console.log(age);

//
// let x = {
//     name: 'vasa',
//     greeting: function () {
//         console.log('hello my name is ' + this.name);        //this - {?????????? ?????? ????????????????????} ?????? ???????? ???? ???????????? this ???????? ??.
//     }
// }
// console.log(x.greeting());

//====================================================================================================================
//====================================================================================================================
//====================================================================================================================
