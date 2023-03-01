// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1,'a','w','123@mail.com','213321231'),
    new User(8,'s','e','123@mail.com','213321231'),
    new User(3,'d','r','123@mail.com','213321231'),
    new User(6,'f','t','123@mail.com','213321231'),
    new User(5,'g','y','123@mail.com','213321231'),
    new User(4,'h','u','123@mail.com','213321231'),
    new User(7,'j','i','123@mail.com','213321231'),
    new User(2,'k','o','123@mail.com','213321231'),
    new User(9,'l','p','123@mail.com','213321231'),
    new User(10,';','[','123@mail.com','213321231'),
]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersPair = users.filter(user => user.id % 2 === 0);
console.log(usersPair);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a,b) => {
    if (a.id > b.id){
        return 1
    }
    if (a.id < b.id){
        return -1
    }
    if (a.id === b.id){
        return 0
    }
});


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        User.apply(this,arguments);
        this.order = order;
    };
}


// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(1,'a','w','123@mail.com','213321231',[1,2,3,45,]),
    new Client(8,'s','e','123@mail.com','213321231',[1,2,3,45,2]),
    new Client(3,'d','r','123@mail.com','213321231',[1,2,3,45,3,5]),
    new Client(6,'f','t','123@mail.com','213321231',[1,2,3,45,453,235,12]),
    new Client(5,'g','y','123@mail.com','213321231',[1,213,123,2,3,45,]),
    new Client(4,'h','u','123@mail.com','213321231',[1,2,3,321,1232453,54,45,]),
    new Client(7,'j','i','123@mail.com','213321231',[1,2,3,45,213]),
    new Client(2,'k','o','123@mail.com','213321231',[1,2,3,]),
    new Client(9,'l','p','123@mail.com','213321231',[1,2,]),
    new Client(10,';','q','123@mail.com','213321231',[1]),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a,b) => {
    if (a.order.length > b.order.length){
        return 1
    }
    if (a.order.length < b.order.length){
        return -1
    }
    if (a.order.length === b.order.length){
        return 0
    }
})
console.log(clients)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function CarMaker(model,brand,year,maxSpeed,capacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function (){
        for (const key in this) {
            if (typeof this[key] === "function"){
                // console.log(key)
            }else {
                console.log(key, '-', this[key])
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
}
let car1 = new CarMaker('y','telsa',2020,220,2)
car1.increaseMaxSpeed(150);
car1.changeYear(2212)
car1.addDriver({name:'artem',age:29})
car1.info()


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class CarMaker2 extends CarMaker{
    constructor(model,brand,year,maxSpeed,capacity) {
        super(model,brand,year,maxSpeed,capacity);
    };
}
let car2 = new CarMaker2('infinity','Porsche',2015,250,3)
car2.addDriver({name:'Karina',age:25})
car2.increaseMaxSpeed(260)
car2.changeYear(2022)
car2.info()


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Julie',22,24.1),
    new Cinderella('Hayley',23,25.1),
    new Cinderella('Jody',24,24.2),
    new Cinderella('Marilyn',25,25.2),
    new Cinderella('Bonnie',26,24.3),
    new Cinderella('Emily',27,25.4),
    new Cinderella('Kathleen',28,24.4),
    new Cinderella('Ethel',23,25.5),
    new Cinderella('Betty',25,24.5),
    new Cinderella('Mary',24,25.6),
]



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella {
    constructor(name,age,slipper) {
        super(name,age);
        this.slipper = slipper;
        this.wife = {}
    }
}
let prince = new Prince('Jonny',25,24.5)



//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinerella of cinderellas) {
    if (cinerella.footSize === prince.slipper){
        prince.wife = cinerella
    }
}



//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(cin => cin.footSize === prince.slipper));