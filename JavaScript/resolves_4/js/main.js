document.write(`<a class="button" href="../../index.html">Home</a>`)
document.write(`<a class="button b2" href="https://github.com/Tommy2517/Tommy2517.github.io/blob/main/JavaScript/resolves_4/js/main.js">in GitHub</a>`)
document.write('<div class="main c_yg">')
document.write('<div class="section">')

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return a * b;
}

console.log('площа прямокутника: ', squareRectangle(3, 6));
//================================================================================================================

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r) {
    return (r**2) * Math.PI
}

console.log('площа кола: ', squareCircle(5));
//================================================================================================================

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(h, r) {
    return (r**2) * Math.PI * h;
}

console.log(squareCylinder(4, 5));
//================================================================================================================

// - створити функцію яка приймає масив та виводить кожен його елемент
let qwe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'wwq', 'www', 'eew']

function looper(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

looper(qwe);
//================================================================================================================

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`<div class="border"><h4>результат завдання 5: </h4>`);
function p(paragraph) {
    document.write(`<p class="c_yg">${paragraph}</p>`)
}

p('Hello Okten! =)');
document.write(`</div>`);//border close
//===============================================================================================================

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`<div class="border"><h4>результат завдання 6: </h4>`);
function ulLi(li) {
    document.write(`<ul class="c_yg">
                        <li>${li}</li>
                        <li>${li}</li>
                        <li>${li}</li>
                   </ul>`);
}

ulLi('kawabanga');
document.write(`</div>`);//border close
//================================================================================================================

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<div class="border"><h4>результат завдання 7: </h4>`);

function countLi(textLi, amountLi) {
    document.write(`<ul class="c_yg">`)
    for (let i = 0; i < amountLi; i++) {
        document.write(`<li>${textLi}</li>`)
    }
    document.write(`</ul>`)
}

countLi(`You`, 7)
document.write(`</div>`);//border close
//================================================================================================================

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(`<div class="border"><h4>результат завдання 8: </h4>`);

let qwas = [321, 'gfhd', !(2 > 7), 77, {lang: 'ua',}];

function arrList(arr) {
    document.write(`<ul class="c_yg">`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

arrList(qwas)
document.write(`</div>`);//border close

//================================================================================================================
document.write('</div>')//section close
document.write('<div class="section">')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`<div class="border"><h4>результат завдання 9: </h4>`);
let objArr = [
    {id: 1, name: 'a', age: 10,},
    {id: 2, name: 'b', age: 20,},
    {id: 3, name: 'c', age: 30,},
];

function objBlock(arr) {
    for (const arrElement of arr) {
        document.write(`<div class="c_yg block">`)
        for (const arrElementKey in arrElement) {
            document.write(`${arrElementKey} - ${arrElement[arrElementKey]}<br>`)
        }
        document.write(`</div>`)
    }
}
objBlock(objArr)
document.write(`</div>`);//border close
document.write('<h2>Решта вправ у консолi</h2>')
//================================================================================================================

// - створити функцію яка повертає найменьше число з масиву
let numbers = [23, 90, 87, 65, 432, 12, 45, 5, 213, 453, 123];

function littleEl(arr) {
    let count = arr[0];
    for (const arrElement of arr) {
        if (count > arrElement) {
            count = arrElement
        }
    }
    return count
}

console.log(littleEl(numbers));
//================================================================================================================

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sum(numbers));
//================================================================================================================

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let saver = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = saver;
    return arr;
}

console.log(swap(numbers, 0, 2));
//================================================================================================================
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//================================================================================================================

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let cV = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
]

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let total = 0;
    for (const element of cV) {
        if (exchangeCurrency === element.currency) {
            total = sumUAH / element.value
        }
    }
    return total;
}

console.log(exchange(10000, cV, 'USD'));

//================================================================================================================
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//================================================================================================================
document.write('</div>')//section close

document.write('</div>')//main close