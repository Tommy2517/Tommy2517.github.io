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

let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
    {
        "title": "Обухівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Подільський район",
        "type": "raion"
    },
    {
        "title": "м. Охтирка",
        "type": "city"
    },
    {
        "title": "Мар'їнська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Мелітополь",
        "type": "city"
    },
    {
        "title": "Куп’янський район",
        "type": "raion"
    },
    {
        "title": "Святогірська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Рівне",
        "type": "city"
    },
    {
        "title": "Бородянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Роздільнянський район",
        "type": "raion"
    },
    {
        "title": "Запорізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шосткинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Болградський район",
        "type": "raion"
    },
    {
        "title": "Прилуцький район",
        "type": "raion"
    },
    {
        "title": "Олешківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Березівський район",
        "type": "raion"
    },
    {
        "title": "Очаківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Смілянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Очаків",
        "type": "city"
    },
    {
        "title": "Рівненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Первомайський район",
        "type": "raion"
    },
    {
        "title": "Ізмаїльський район",
        "type": "raion"
    },
    {
        "title": "Сквирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Шостка",
        "type": "city"
    },
    {
        "title": "Мелітопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Маріупольський район",
        "type": "raion"
    },
    {
        "title": "Охтирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білгород-Дністровський район",
        "type": "raion"
    },
    {
        "title": "м. Запоріжжя",
        "type": "city"
    },
    {
        "title": "м. Коростень",
        "type": "city"
    },
    {
        "title": "Луганська область",
        "type": "oblast"
    },
    {
        "title": "м. Житомир",
        "type": "city"
    },
    {
        "title": "Курахівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Черкаський район",
        "type": "raion"
    },
    {
        "title": "Новоград-Волинський район",
        "type": "raion"
    },
    {
        "title": "Костянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Переяславська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Новоукраїнський район",
        "type": "raion"
    },
    {
        "title": "Уманський район",
        "type": "raion"
    },
    {
        "title": "Коростенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Переяслав",
        "type": "city"
    },
    {
        "title": "Шосткинський район",
        "type": "raion"
    },
    {
        "title": "Великоновосілківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Чернігівський район",
        "type": "raion"
    },
    {
        "title": "Радомишльська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вугледарська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Звенигородський район",
        "type": "raion"
    },
    {
        "title": "м. Конотоп",
        "type": "city"
    },
    {
        "title": "Вишгородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Гребінківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненський район",
        "type": "raion"
    },
    {
        "title": "Бердянський район",
        "type": "raion"
    },
    {
        "title": "Миколаївський район",
        "type": "raion"
    },
    {
        "title": "Гостомелська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Дубровицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Українська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Воскресенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Маріуполь",
        "type": "city"
    },
    {
        "title": "Чугуївський район",
        "type": "raion"
    },
    {
        "title": "Охтирський район",
        "type": "raion"
    },
    {
        "title": "Житомирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Сарни",
        "type": "city"
    },
    {
        "title": "Широківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Славутицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Золотоніський район",
        "type": "raion"
    },
    {
        "title": "Конотопська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Волноваський район",
        "type": "raion"
    },
    {
        "title": "Донецький район",
        "type": "raion"
    },
    {
        "title": "Маріупольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вараський район",
        "type": "raion"
    },
    {
        "title": "м. Славутич",
        "type": "city"
    }
];//маю надiю що цей масив можна було выкористовувати)

let task_4 = document.createElement('div');
    task_4.style.width = '90vw';
    task_4.style.height = '50vh';
    task_4.style.background = 'grey';
    task_4.style.position = 'relative';

let head_4 = document.createElement('header');
    head_4.style.width = '100%';
    head_4.style.height = '10%';
    head_4.style.position = 'relative';
    head_4.style.background = 'pink';
    head_4.style.top = '5px';
    head_4.innerText = 'task4'
    head_4.style.textAlign = 'center'
    head_4.style.fontSize = '29px'

let section_4 = document.createElement('section');
section_4.style.position = 'relative'
section_4.style.display = 'flex'
section_4.style.justifyContent = "space-evenly"
section_4.style.alignItems = 'center'
section_4.style.top = '20px'
section_4.style.flexWrap = 'wrap'
section_4.style.rowGap = '20px'

let prew = document.createElement('button');
    prew.innerText = 'prew'
    prew.style.position = 'absolute'
    prew.style.left = '40%'
    prew.style.height = '100%'
    prew.style.fontSize = '23px'
    prew.style.border = '0'
    prew.style.borderRadius = '10px'
    prew.style.background = 'green'
let next = document.createElement('button');
    next.innerText = 'next'
    next.style.position = 'absolute'
    next.style.right = '40%'
    next.style.height = '100%'
    next.style.fontSize = '23px'
    next.style.border = '0'
    next.style.borderRadius = '10px'

document.body.append(task_4)
task_4.append(head_4,section_4)
head_4.append(prew,next)

let list_n = 0;
let list_c = 10;
for (;list_n < list_c;list_n++){
    let elem = document.createElement('div');
    elem.style.width = '19%';
    elem.style.height = '100px';
    elem.style.background = 'silver'
    elem.style.display = 'flex'
    elem.style.flexDirection = 'column'
    elem.style.alignItems = 'center'
    elem.style.boxSizing = 'border-box'

    let str_1 = document.createElement('h3')
        str_1.innerText = `Назва - ${locations[list_n].title}`
        str_1.style.margin = '0'
    let str_2 = document.createElement('h3')
        str_2.innerText = `Тип - ${locations[list_n].type}`
    elem.append(str_1,str_2)
    section_4.append(elem)
    next.onclick = function (){
        prew.disabled=false
        list_c+=10;
        if (list_c > locations.length){
            list_c = locations.length
            next.setAttribute('disabled','')
        }
        section_4.innerHTML = ''
        for (;list_n < list_c;list_n++){
            let elem = document.createElement('div');
            elem.style.width = '19%';
            elem.style.height = '100px';
            elem.style.background = 'silver'
            elem.style.display = 'flex'
            elem.style.flexDirection = 'column'
            elem.style.alignItems = 'center'
            elem.style.boxSizing = 'border-box'

            let str_1 = document.createElement('h3')
            str_1.innerText = `Назва - ${locations[list_n].title}`
            // str_1.style.margin = '0'
            let str_2 = document.createElement('h3')
            str_2.innerText = `Тип - ${locations[list_n].type}`
            elem.append(str_1,str_2)
            section_4.append(elem)
        }
    }
    prew.onclick = function () {
        next.disabled=false;

        if (list_c <= 10){
            list_c=10
            prew.setAttribute('disabled','')
        }else {
            list_c-=10;
            list_n-=20;
            if (list_n<0){
                list_n=0;
            }
            section_4.innerHTML = '';}


        for (;list_n < list_c;list_n++){
            let elem = document.createElement('div');
            elem.style.width = '19%';
            elem.style.height = '100px';
            elem.style.background = 'silver'
            elem.style.display = 'flex'
            elem.style.flexDirection = 'column'
            elem.style.alignItems = 'center'
            elem.style.boxSizing = 'border-box'

            let str_1 = document.createElement('h3')
            str_1.innerText = `Назва - ${locations[list_n].title}`
            // str_1.style.margin = '0'
            let str_2 = document.createElement('h3')
            str_2.innerText = `Тип - ${locations[list_n].type}`
            elem.append(str_1,str_2)
            section_4.append(elem)
        }
    }
}
console.log(locations.length)



// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let task_5 = document.createElement('div');
let head_5 = document.createElement('header');
let section_5 = document.createElement('section');


section_5.style.rowGap = '10px'
section_5.style.display = 'flex'
section_5.style.flexDirection = 'column'
section_5.style.boxSizing = 'border-box'

head_5.style.width = '100%'

task_5.style.width = '90vw';
task_5.style.height = '50vh';
task_5.style.background = 'grey';
task_5.style.position = 'relative';
task_5.style.display = 'flex';
task_5.style.flexDirection = 'column';
task_5.style.alignItems = 'center';


let form_2 = form.cloneNode(true);
form_2.innerHTML= '';
form_2.style.width = '100%'
form_2.style.background = 'coral'
form_2.setAttribute('name','form_2');

let columns = document.createElement('input');
columns.setAttribute('name','col');
let rows = document.createElement('input');
rows.setAttribute('name','row');
let contents = document.createElement('input');
contents.setAttribute('name','cont');
let btn_5_1 = document.createElement('button');
btn_5_1.innerText= 'Прибрати'
btn_5_1.onclick = function (eo) {
    eo.preventDefault();
    section_5.innerHTML = ''
}
let btn_5 = document.createElement('button');
btn_5.innerText = 'Створити'

btn_5.onclick = function (eo) {
    eo.preventDefault();

    let col = document.forms.form_2.col.value;
    let row = document.forms.form_2.row.value;
    let cont = document.forms.form_2.cont.value;
    for (let i =0;i<col;i++){
        let column = document.createElement('div')
        column.style.display = 'flex'
        column.style.columnGap = '10px'
        for (let i =0;i<row;i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerText = cont;
            column.append(cell)
        }
        section_5.append(column)
    }
}

document.body.append(task_5);
task_5.append(head_5);
task_5.append(section_5);
head_5.append(form_2);
form_2.append(columns,rows,contents,btn_5,btn_5_1);

