document.write(`<div class="main">`);
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRectangle = (a, b) => console.log('task 1 - площа прямокутника: ', a * b);
squareRectangle(5, 6);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfCircle = (r) => {
    console.log('task 2 - площа кола: ', (r ** 2) * 3.14);
};
areaOfCircle(5);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaOfCilinder = (r, h) => {
    console.log('task 3 - площа циліндру: ', 2 * Math.PI * r * h + 2 * Math.PI * (r ** 2));
};
areaOfCilinder(5, 7);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив та виводить кожен його елемент
let mass = [5, 'okten', 3, 6, 'odessa', 3, 2, 'space', 1];
let arrDispenser = (arr) => {
    let num = 0;
    for (const item of arr) {
        console.log('task 4 - ', 1 + num++ + '-й елемент' + ` -`, item);
    }
};
arrDispenser(mass);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`<div class="section">`);
document.write(`<h3>task 5</h3><hr>`);
let par = (p) => {
    document.write(`<p>${p}</p>`);
};
par('Hello okten');
document.write(`</div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<div class="section">`);
document.write(`<h3>task 6</h3><hr>`);
let ul = (li) => {
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
};
ul('hi');
document.write(`</div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<div class="section">`);
document.write(`<h3>task 7</h3><hr>`);
let ul_ = (li, total) => {
    for (let i = 0; i < total; i++) {
        document.write(`<li>${li}</li>`);
    }
};
ul_('hi', 5);
document.write(`</div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<div class="section">`);
document.write(`<h3>task 7</h3><hr>`);
let arrli = (arr) => {
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
};
arrli(mass);
document.write(`</div>`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objArr = [
    {id: 1, name: 'a', age: 10,},
    {id: 2, name: 'b', age: 20,},
    {id: 3, name: 'c', age: 30,},
];
document.write(`<div class="section">`)
document.write(`<h3>task 8</h3><hr>`);

let shower = (arr) => {
    for (const item of arr) {
        document.write(`<div class="block">`)
        for (const itemKey in item) {
            document.write(`${itemKey} - ${item[itemKey]}<br>`)
        }
        document.write(`</div>`)
    }
}
shower(objArr)
document.write(`</div>`)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найменьше число з масиву
let minArr = (arr) => {
    let num = arr[0];
    for (const item of arr) {
        if (item < num) {
            num = item;
        }
    }
    console.log('task 5 -', num)
}
minArr(mass)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    sum = 0;
    for (const item of arr) {
        if (typeof item == "number"){
            sum += item;
        }
    }
    console.log('task 10 -',sum);
}
sum(mass);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let swaper = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swaper;
}
swap(mass,0,1)
console.log('task 11 -',mass)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let curVal = [{currency:'USD',value:40},{currency:'EUR',value:42}]
let exchange = (sumUAH,curVal,excCur) => {
    if (excCur === curVal[0].currency){
        console.log(sumUAH / curVal[0].value);
    }
    else if (excCur === curVal[1].currency){
        console.log(sumUAH / curVal[1].value);
    }
    else {
        console.log('not valid')
    }
}
exchange(10000,curVal,'USD')
document.write(`</div>`)
