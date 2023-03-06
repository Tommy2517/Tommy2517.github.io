let home = document.createElement('a')
home.href = "../../index.html"
home.innerText = 'Home'
home.style.background = 'silver'
document.body.append(home)
// home.style.background = 'green'

let blockTask = document.createElement('div');
blockTask.style.width = '25%';
blockTask.style.height = '300px';
blockTask.style.background = 'grey';


// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let form = document.createElement('form');
form.setAttribute('name', 'form');
form.classList.add('form');

let name = document.createElement('input');
name.setAttribute('name', 'name');

let surname = document.createElement('input');
surname.setAttribute('name', 'surname');

let age = document.createElement('input');
age.setAttribute('name', 'age');

let btn = document.createElement('button');
btn.setAttribute('name', 'btn');
btn.innerText = 'Send'
btn.onclick = function (eo) {
    eo.preventDefault();
    let box = document.createElement('div');
    box.classList.add('userCard');

    // let name = document.forms.form.name.value;
    // let surname = document.forms.form.surname.value;
    // let age = document.forms.form.age.value;
    let form1 = document.forms.form;
    for (const item of form1) {
        let str = document.createElement('div');
        let label = item.name;
        if (label !== 'btn') {
            str.append(label, ' - ', item.value);
            console.log(label);
        }
        box.append(str);
    }

    blockTask.append(box);
    // box.append(name,surname,age)
}
document.body.append(blockTask)
blockTask.append(form)
form.append(name, surname, age, btn)

// ========================================================================================================
// ========================================================================================================
// ========================================================================================================


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
let digit = document.createElement('div')
digit.classList.add('digit');

// let i,j;
// i = localStorage.getItem('key1');
// j = JSON.parse(i);
// j++
// i = JSON.stringify(j);
// localStorage.setItem('key1',i);
//
// console.log(i,j,typeof i,typeof j)
// digit.append(i)
let num = JSON.parse(localStorage.getItem('key1')) || 0;
 num++;
localStorage.setItem('key1', JSON.stringify(num))
document.body.append(digit)
digit.append(num)


// ========================================================================================================
// ========================================================================================================
// ========================================================================================================


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію
let pageSession = document.createElement('a')
pageSession.classList.add('link');
pageSession.href = 'pageSession.html'
pageSession.textContent = 'Session'
pageSession.setAttribute('target', '_parent')
document.body.append(pageSession)

pageSession.onclick = function (eo) {
    class Session {
    constructor(date, time) {
        this.date = date;
        this.time = time;
    }
}
    let session = JSON.parse(localStorage.getItem('sessions')) || [];
    let moment = new Date

    let day = ''+moment.getDate()
    if (day.length < 2){
        day = '0'+day
    }

    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    let month = months[new Date().getMonth()]

    let year = moment.getFullYear()
    let date = `${day}.${month}.${year}`

    let time = `${moment.getHours()}:${moment.getMinutes()}`

    session.push(new Session(date,time))
    localStorage.setItem('sessions', JSON.stringify(session))

}





let index1 = document.createElement('a')
index1.href = "sessions.html"
index1.innerText = 'index'
index1.style.background = 'yellow'
index1.style.fontSize = '30px'
document.body.append(index1)



// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів











// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)