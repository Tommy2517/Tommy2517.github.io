//массив с вложенным массивом
let arrMassive = [123, 'karinka', 'artem', 'snejok', ['qwe', 'asd', 'zxc', [123, 456, 789]]];

console.log(arrMassive[0]); //вывод элемента массива в консоль
arrMassive[1] = 'koshka.html'; //изменяет значение элемента по индексу 1

console.log(Array.isArray(arrMassive)); //Проверяет является ли этот элемент массивом или нет. выводит true либо false.
//=================================================//=================================================

//Объект. Внутри ключи со значениями.
objUser = {
    userName: 'snejok',
    age: 9,
    skills: ['eating', 'pissing', 'kacking', 'draping']
}
objUser.skills[2] = 'kakakaking'; //присвоение нового значения элементу обьекта
objUser['skills'][2] = 'kakakaking2';//аналогичный способ предыдущему
console.log(objUser.skills[2]); //вывод характеристики объекта по ключу
//=================================================//=================================================


//объект с ключом в котором массив в котором объекты:
let userKoshka = {                                  //Объект
    username: 'koshka',                             //ключ со значением
    age: 25,                                        //ключ со значением
    skills: [                                       //ключ с массивом
        {skill: 'largeing lips', exp: '2 years'},   //объект внутри массива
        {skill: '4istka', exp: '3 years'},          //объект внутри массива
        {skill: 'botox', exp: '1 years'},           //объект внутри массива
    ],                                              //конец массива
    marryed: true                                   //ключ с булевым значением
} //конец объекта
console.log(userKoshka.skills[1].exp) // выводит объект скилс второй элемент массива третий ключ обьекта.
userKoshka.status = 55; //присваивает новый ключ и его значение этому объекту.
//=================================================//=================================================


// примитивы и объекты:
let x = 0;
let y = x;
y += 1;
//в итоге консоль лог выведет что у = 1, а х = 0.
let objX = {
    num1: 12,
    num2: 13,
    num3: 14
}
let objY = objX; //objY не копирует себе значения objX. он ссылается на обьект и становится вторым именем поэтому если внести изменения в любой из этих обьектов, значения примут оба
objY.num3 = 12
objX.num3 = 44
console.log(objX)
console.log(objY)
//=================================================//=================================================


// синтаксис if else:
if (true) {   //проверка блока
    console.log('yes') //результат условия тру
}else {
    console.log('no')  // результат условия фолс
}
const answer = confirm('asdqwer'); // аналог prompt() выводит модальное окно с подтверждением или отменой возвращает тру или фолс
if (answer) {
    document.write('<h1>hello</h1>') // сообщение на странице
}else{
    document.write('<h1>bye</h1>') // сообщение на странице
}
//=================================================//=================================================


//синтаксис switch:
let key24                                                   //создаем переменную
key24 = prompt('qwer123 or qwer124 or qwer125')     //задаем значение переменной через модальное окно
switch (key24) {                                            //принимаем значение переменной свичом
    case 'qwer123':                                 //сравниваем ключ с переменной если подходит выполняемусловия
        console.log('red');
        document.write('<h2 style="color: red">red</h2>');
        break;                              //если ключи совпали останавливаем дальнейвие проверки свича

    case 'qwer124':
        console.log('green');
        document.write('<h2 style="color: green">green</h2>');
        break;

    case 'qwer125':
        console.log('blue');
        document.write('<h2 style="color: #2268bb">blue</h2>');
        break;
    default:                            //на подобии else если ни однин из ключей не подошел выполняем блок дэфолт
        console.log('BYE');
        document.write('<h2 style="color: gray">BYE</h2>');
}
//=================================================//=================================================
