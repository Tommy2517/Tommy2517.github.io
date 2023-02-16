/*
function foo() {  //function declaration   работают с хойстингом
    //saddsas
    //saddsas
};*/
/*
let foo = function () {  //function expression   не работает с hoisting -ом
    //saddsa
    //saddsa
}*/
//let calculator = (a,b) => {return a + b;} //Arrow function Стрелочная функция.
//let calculator = (a,b) => a + b; //Arrow function Стрелочная функция. идентично^^
/*let calculator = (a,b,action) => {
    let result;
    if (action === '+') {
        result = a + b;
    }else {
        result = a - b;
    }
    return result;
};
console.log(calculator(10, 20, '*'));*/

/*
let user = {
    name: 'art',
    age: 21,
    greeting() {  //функцию внутри обьекта можно указывать без "function"
        console.log(`hello my name is ${this.name}`)//this. обращается к близайшему корневому объекту
    },
    wife: {
        hello: () =>{
            console.log(this.name)} //при стрелочной функции this. ссылается не к обьекту а к window
    }
}*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////Recursion  -- Рекурсия/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let arr = [11,22,33,[123,234,435],243,'234',[324,['qwer','dgsf',[324,876,[123,2,[{foo: 123,bar:'qwe1'},{foo: 123,bar:'qwe2'},{foo: 123,bar:'qwe3'}],5],'qwe']]]];
let newArr = [];
/!*
let arrSort = (array) => {
    for (let arrayElement of array) {
        if (Array.isArray(arrayElement)) {
            for (const arrayElementElement of arrayElement) {
                if (Array.isArray(arrayElementElement)) {
                } else {
                    newArr[newArr.length] = arrayElement;
                }
            }
        } else {
            newArr[newArr.length] = arrayElement;
        }
    }
}

*!/ //не динамический сортировщик (без рекурсии)

function arrSort(arr){
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            arrSort(arrElement);
        }else if (!Array.isArray(arrElement) && typeof arrElement === "object"){
            for (const arrElementKey in arrElement) {
                newArr[newArr.length] = arrElement[arrElementKey];
            }
        } else {
            newArr[newArr.length] = arrElement;
            //newArr.push(arrElement); аналог ^^
        }
    }
}
arrSort(arr);
console.log(newArr);*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////CALLBACK//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function foobar(callback) {  //задекларированная функция с аргументом калбэк
    callback(); //выполнение внуренней функции
}
let xxx = function () { //экспрессивная функция
    console.log('hello'); // выполняет в себе что то.
};
foobar(xxx) // помещаем вторую функцию как аргумент, в первую.
//в результате выполняем код второй функции с помощью первой.*/

/*function calculator(a, b, action) {
    action(a,b);
}
calculator(10,20,function (a,b) {
    console.log(a + b + a + b);
})
calculator(25,35,function (a,b) {
    console.log(a + b + a + b);
})*/

//1. массивы являются объектами.
//2. у объектов есть характеристики.
//3. некоторые характеристики являются функциями.
//4. одна из этих функций arr.filter
//5. функция filter должна отфильтровать обьекты массива
// и оставить только тех которые нам нужны
//6. внутри функции фильтр есть промежуток кода который не заполнен
// он называется callback. остаетс только заполнить логику выполнения фильтра
let users = [
    {name: 'vasil', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olga', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olga', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//Массив
let filtet = users.filter(function (user) {
    return user.age > 30;
});
console.log(filtet)
