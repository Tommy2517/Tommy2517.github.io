
//# 1 --- Створити змінні. Присвоїти кожному з них значення. Вивести кожну змінну за допомогою: console.log:
{
let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 =  'ua';
let num1 =  1;
let num2 =  10;
let num3 =  -999;
let num4 =  123;
let pI =  3.14;
let num6 =  2.7;
let num7 =  16;
let bool1 =  true;
let bool2 =  false;

    console.log(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${pI} ${num6} ${num7} ${bool1} ${bool2}`)

}


//# 2 --- Створити 3 змінних. наповнити їх своїм ПІБ. З'єднати їх в одну змінну person:
{
    let firstName = 'Linevich';
    let middleName = 'Artem';
    let lastName = 'Nikolaevich';
    let person = firstName + ' ' + middleName + ' ' + lastName;
    console.log(person);
}


//# 3 --- За допомогою оператора typeof визначити типи змінних та вивести їх в консоль:
{
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof a, typeof b, typeof c);
}


//# 4 --- prompt???
{
let name = prompt('Enter your name :');
let ltName = prompt('Enter your last name :');
let age = prompt('Enter your age :');
    console.log(name, ltName, age)
}

