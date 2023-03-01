//////////Date//////////////
let date = new Date(); //new - новая ячейка памяти в которой мы помещаем объект Date
console.log(date);
console.log(date.getFullYear());//возвращает текущий год
console.log(date.getHours());//возвращяет текущий час
console.log(date.getTime()); ///возвращает количество милисекунд прошедшее с 1 янв. 1970г.

let shot = new Date(2131231211122223); // показывает время которое было или будет спустя...
console.log(shot);
let a = 0;

// setInterval(function () {
//     console.log(a += 1);
// },10000) //setInterval выполняет действия из первого аргумента постоянно
// // с интервалом указанным во втором аргументе


////////////////Errors///////


console.log('start')
let obj = null; // если вызвать поле объекта которого нет. код остановится и выпадет ошибка "Uncaught TypeError: Cannot read properties of null (reading 'id')"
try { //если ошибка выпадает внутри блока try код не останавливается
console.log(obj.id);
}catch (e) {              //а логи ошибки помещаются в кетч (е);
    console.log(e);//где можно прикрутить определенную логику либо просто вывести ошибку в консоль и продолжить выполнять код.
}
console.log('end')


function divider(a, b) {
    if (b === 0) {//если данная проверка вернет тру то мы принудительно вызовем ошибку
        throw new Error('second arg cannot be ZERO');
    }
    let result = a/b;
    return result;
}

try {
    console.log(divider(10, 0));;
} catch (e){
    console.log('est owibka')
}

///////////////оператор опциональной последовательности////////////////////////
console.log('//////оператор опциональной последовательности//////')

let car = {
}

function asd(obj) {
    console.log(obj.inner?.id);
}//функция будет посылать запрос на поле id только в том случае если inner не является Null или undefined
//оператор одноглазый элвис ?. говорит что действия происходящие после него опциональные,
// не обязательные. поэтому если будет ошибка изза отсутствия элемента к которому обращаемся,
// он сделает так что бы программа продолжила работу
//обращение к сесуществующему полю в обьекте возвращает undefined
asd(car)


///////////процесс сотворения объект///////////////////
console.log('///////////процесс сотворения объект///////////////////')
let name1 = 'kokos';
let age = 20;

let user = {
    name1,//если название характеристики объекта совпадает с названием переменной которая
    age,// присвоена этой характеристике, можно использовать сокращение и оставить только название
    funct(){
      //если вы создаем функцию внутри объекта, можно обозначить ее без 'function'
    },
}
console.log(user);

/////////////////////////////Деструктуризация/////////////////////////////
let sCar = {
    model:'subaru',
    power:123,
    drive(){},
}
// let model = sCar.model;//переменным можно присваивать значения полей объектов.
// let power = sCar.power;
//let drive = sCar.drive; //но с помощью деструктуризации это можно делать проще

let {model,power,drive} = sCar;//деструктуризация - это
console.log(model,power,drive)

function extractor({model}){ //если хотим достать model изобъекта.
    console.log(model)
}
extractor(sCar)

//если у нас есть объект с характеристикой name внутри которого тоже есть объект c
// характеристикой name
let user1 = {
    name:'kokos',//и мы хотим достать имя объекта
    age:25,
    wife: {//и хотим достать объект
        name:'kina',
        age:22,
    }
}
// let {wife, name} = user1;//так мы достаем их с помощью деструктуризации.

// console.log(wife,name)//выводит объект и name 'kokos'

// но если мы хотим вытащить имя из подъобъекта таким образом let {name} = wife;
//то получится конфликт имен так как name уже занята
//а достать то же име просто изменив его не получится let {wifeName} = wife так как такого поля нет
//для того что бы достать имя из подъобъекта и записать в новую переменную, нужно сделать так:
// let {name:wifeName} = wife;
// console.log(wifeName);

let {name, wife, wife:{name:wifename}} = user1 // таким образом деструктурируем объект
    //внутри объекта
console.log(name,wife,wifename)


///////Деструктуризация массива./////
let nums = [1,2,3,4,5,6]
let [q,,c,d,e,f] = nums;//что бы не зписывать какой то объект нужно ставить пустые запятые
console.log(nums);
console.log(q,c,d,e,f)


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

let [{title}, second, third, fourth] = products;
console.log(title);

////////spread оператор////////// === размазывать.
//////как копировать объекты.
let user2 = {
    name: 'qwerty',
    age:22
}

let user3 = user2; //таким образом объект не будет скопирован и не будет отдельным объектом
//название этого объекта будет другое но внутренние характеристики будут ссылаться на те же
//ячейки памяти на которые ссылается изначальный объект и по сути у нас 1 объект на который ссылаются разные объекты

//а для того что бы полностью скопировать объект нужно использовать спрэд оператор:

let user4 = {...user2, age:123};//копирует объект и заменяет значение в определенном поле.
console.log(user4);
//если таким образом скопировать объект в котором будет другой объект, то скоприруется только внешний объект
//а внутренний будет ссылкой. что бы внутренний скопировался тоже нужно так же спреднуть его

let user5 = {
    name:'snow',
    age: 10,
    wife: {
        name:'koks',
        age: 10
    }
}
let user6 = {...user5,wife:{...user.wife}} //теперь объект внутри так же скопирован
console.log(user6);

////////полная копия объекта "NWE"/////
let clone = structuredClone(user6)
console.log(clone);

let user7 = {name:'vasa'};
let s = JSON.stringify(user7) //превращаетобъект в строку(все поля и значения выводятся обычной  строкой)
console.log(s,user7)

let parse = JSON.parse(s);
console.log(parse);

let arr = [...nums] //спрэдом можно так же копировать массивы.

console.log(arr);

let cloneUser = Object.assign({},user5);//клонирует объект поверхностно. т.е. объект
//получаем новый но содержимое это ссылки на старые поля другого объекта. что бы сделать глубокую копию
//нужно прогнать через JSON.stringify и parse;
console.log(cloneUser)
let xy = JSON.parse(JSON.stringify(user5))//таким образом можно коротко скопировать объект полностью
//и глубоко, но если в объекте будут функции, они исчезнут