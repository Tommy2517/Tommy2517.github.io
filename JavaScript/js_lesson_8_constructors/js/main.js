///////////Функция конструктор. Название принято начинать с большой буквы

function User(name, age, status) {//шаблон для объекта. Аргументы принимают значения для характеристик
    this.name = name;//поле нейм заполняется первым аргументом
    this.age = age//второй аргумент
    this.status = status;//третий аргумент
    this.gender = 'female';//характеристика для всех объектов будет определена одинакова
    this.greeting = function (msg) {//если будет вызвана функция объекта как аргумент в нее вставляется сообщение
        console.log(`${msg} my name is ${this.name}`);//выводит сообщение, текст и нейм
    };
}
let user1 = new User('artem',29,true)//new помогает понять что функция является конструктором
console.log(user1);//задаем аргументы и конструктор создает новый объект в новой ячейке памяти.
user1.greeting('hi')
user1.name = 'kokos';//изменяем значение характеристики
console.log(user1.name);

function Dev(name,age,skills) {
    this.name=name;
    this.age = age;
    this.skills = skills;
    this.addSkill = function (skill){
        skills.push(skill);//сделали функцию внутри конструктора которая позволит
        // добавлять параменты более простым способом
    }
}

let dev = new Dev('sneg',99,[{title: 'java',exp:3,},{title: 'js',exp:3,}]);
console.log(dev.skills);
dev.skills.push({title: 'c++',exp:3,})
console.log(dev.skills);//добавили новый элемент в массив со скилами
dev.addSkill({title: 'python',exp:3,})
console.log(dev.skills);

///////prototype - это функция конструктора которая позволяет расширять наш конструктор
//добавляет конкретно в конструктор новую функцию. так же можно добавить другие поля
Dev.prototype.addSkills = function (skill){
    this.skills.push(skill);}
dev.addSkills({title: 'Ruby',exp:3,})
console.log(dev.skills);

let array = new Array(11,22,33); //объявление массива под капотом
let arr = [22,33];//обычное объявление массива.
console.log(arr);

Array.prototype.print = function () {//здесь мы добавили к глобальному конструктору массива объект функцию
    console.log(this)//которая при вызове будет выводить массив в консоль
    for (const item of this) {//проитерируем массива что бы выводил каждый элемент отдельно
        console.log(item)
    }
}
array.print()//теперь у нас есть новый метод для масивов который выводит их в консоль.



//////////////////////////call/////////////////////////
function Dewe(name) {//обычный конструктор
    this.name = name;
    this.greeting = function (msg){//функция принимает аргумент и выводит его в консоль с текстом и именем
        console.log(`${msg} my name is ${this.name} `)
    }
}
let newDev = new Dewe('art');
newDev.greeting('hi')

let devel = {
    name:'wewe',
    age:333,
}
console.log(devel);//call делает подмену
newDev.greeting.call(devel,'qwe')//с помощью call подменяем newDew на devel и вызываем функцию
//но уже с характеристиками из другого объекта
//первый аргумент call принимает название переменной а все остальные через запятую это
// аргументы функции которую мы вызываем колом.
//так же существует аналогичный метод apply с той разницей, что аргументы функции нужно указывать
//в массиве следующим образом
newDev.greeting.apply(devel,['hello'])

//call и apply работают только с функциями. То есть call и apply это функции которые позволяют нам
// подменить контекст ключевого слова This в других функциях
//  ключевое слово This может быть либо если функция конструктор либо если функция внутри объекта



/////////bind//////////////подмена контекста
let greetCopy = newDev.greeting.bind(devel) //вызываем функцию, делаем ее копию, подменяем this
//хотим сделать копию функции которая в объекте.
// в качестве this там будет devel
greetCopy('ssssssssssssssssssssss')//даем аргумент для greeting









////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////ПРОТОТИПИРОВАНИЕ/////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let obj = {};
console.log(obj);
console.log(obj.__proto__); //[[Prototype]]

let user3 = {name:'olya', age: 31, status:false};
let userCopy = Object.create(user3);//создает объект на базе существуещего объекта т.е. его прототип.
userCopy.surname = 'picik'
console.log(userCopy.name);//покажет имя прототипа если нет своего.
console.log(userCopy.hasOwnProperty('name'));//проверяет является ли характеристика собственной или прототипа
console.log(userCopy.hasOwnProperty('surname'))//возвращает тру так как характеристика собственная.



//////////////////////////////////////////////////////////////////////////
//////////////////////////////Classes/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Class это другой способ описать функции конструктора.

class User9 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.foo = function () {
            console.log('foo')//первый способ объявления функции в конструкторе
        }
    };
    //отличается от конструктора тем что в классе можно сделать статический метод.
    static foobar(){//его можнобудет вызывать с помощью названия класса те. User9.foobar().
        console.log('foobar')}
bar(){//второй способ объявления функции в конструкторе
    console.log('bar');
}
}
console.log(new User9('vasa', 33));

class superUser extends User9 {
    constructor(name,age,status) {
        super(name,age);//заполняет  конструктор предыдущими аргументами
        this.status = status;
    }
}
superUser = new superUser('bara',22,true)
console.log(superUser);
superUser.bar()


//наследование
function Car(model,power) {
    this.model = model;
    this.power = power;
}

function SuperCar(model,power,turbo) {
    Car.apply(this,arguments);
    this.turbo = turbo;
}
let superCar = new SuperCar('y',123,true);
console.log(superCar);