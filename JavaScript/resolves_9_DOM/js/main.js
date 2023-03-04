//
// - створити блок,
let block = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

let blockStyles = [
    block.style.background = '#333',
    block.style.color = '#fff',
    block.style.width = "200px",
    block.style.height = "100px",
    block.style.fontSize = '23px',
    block.style.marginBottom = '10px'
]

// - додати цей блок в body.
document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
document.body.append(block.cloneNode(true))

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr1 = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.createElement('ul');
document.body.append(menu);
for (const item of arr1) {
    let liInMenu = document.createElement('li');
    liInMenu.innerText = `${item}`
    menu.append(liInMenu)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
for (const item of coursesAndDurationArray) {
    let block2 = block.cloneNode(true);
    document.body.append(block2)
    block2.append(item.title, item.monthDuration);
}

// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
function blockCreate(arr) {
    let block = []//document.body.createElement('div')
    for (const item of arr) {
        let block3 = document.createElement('div');
        block3.classList.add('item');

        let heading = document.createElement('h1');
        heading.classList.add('heading');
        heading.innerText = `${item.title}`

        let description = document.createElement('p');
        description.classList.add('description');
        let year = '';
        if (item.monthDuration === 1) {
            year = 'рiк'
        } else if (item.monthDuration < 5) {
            year = 'роки'
        } else {
            year = 'рокiв'
        }
        description.innerText = `Стаж - ${item.monthDuration} ${year}`

        block3.append(heading, description);
        document.body.append(block3)
        block.push(block3)
        block3.style.background = 'silver'
        block3.style.width = '300px'
    }
    return block
}

blockCreate(coursesAndDurationArray)

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const sim of simpsons) {
    let member = document.createElement('div');
    let title = document.createElement('h3');
    let age = document.createElement('h4');
    let info = document.createElement('p');
    let img = document.createElement('img');

    img.src = sim.photo;
    info.innerText = sim.info;

    let year = '';
    if (sim.age === 1) {
        year = 'рiк'
    } else if (sim.age < 5) {
        year = 'роки'
    } else {
        year = 'рокiв'
    }
    age.innerText = `Bik - ${sim.age} ${year}`;

    title.innerText = sim.name + ' ' + sim.surname;

    document.body.append(member)
    member.append(img, title, age, info)
    member.classList.add('member');

    member.style.position = 'relative'
    member.style.background = 'silver';
    member.style.width = '450px';
    img.style.width = '150px';
    img.style.position = 'relative'
    img.style.left = '30%'
}

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {
    let card = document.createElement('div');
    card.classList.add('card');


    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = item.title

    let time = document.createElement('div');
    time.classList.add('time')

    let month = document.createElement('h3');
    month.classList.add('month');
    month.innerText = item.monthDuration + ' місяців';

    let hour = document.createElement('h3');
    hour.classList.add('hour');
    hour.innerText = 'курс має '+item.hourDuration + ' годин'

    let modules = document.createElement('div');
    modules.classList.add('modules');


    time.append(month, hour)
    card.append(title, time, modules)

    for (const text of item.modules) {
        let module = document.createElement('h4');
        module.classList.add('module')
        module.innerText = text;
        modules.append(module);
    }
    document.body.append(card)
}


// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let elem = document.createElement('div');
let btn = document.createElement('button');
elem.setAttribute('id','text');
elem.classList.add('text')
document.body.append(elem);
document.body.append(btn);
btn.innerText = 'Button'
btn.onclick = function (eo) {
    document.getElementById('text').classList.toggle('text')
}//я вже не можу ((( як на мене весь мiй код така лажа...
//але я одне завдання годинами роблю, тому не можу навiть переробити бо не вистачить часу на iншi а це займатиме ще бiльше часу
//вибачта за ниття але бiльше нiкому не можу жалiтися.



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let ageChecker = document.createElement('div')
let answer = document.createElement('h2')
answer.innerText = ''

let field = document.createElement('input',)
field.placeholder = 'Введiть ваш вiк'

let btn2 = btn.cloneNode(true)
btn2.onclick = function (eo) {
    if (ageChecker.children[1].value >= 18){
        answer.innerText = 'bolshe'
    }else{
        answer.innerText = 'menshe'
    }
}
ageChecker.append(answer,field,btn2)
document.body.append(ageChecker)
ageChecker.classList.add('ageChecker')
//це така жуть слiв немає але робе i на тому дякую
