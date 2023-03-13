//инкремент декремент
// let x = 0;
// let y = 0;
// x++ //префиксный инкремент
// y-- //префиксный декремент
// --y //постфиксный декремент
// ++x //префиксный инкремент

//цикл for

// for (let i = 0; i < 5; i++) {
//     console.log(i)            //выводит счетчик переменную i в консоль если пока i < 5;
// }

//===================================

// let arr = [11,22,33,44,55,66,77,88]
// for (let i = 0;i < arr.length; i++) {
//     console.log(arr[i])          //выводит элементи массива по индексу с нуля. пока i < чем длина массива
// }

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
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
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

// for (let i = 0; i <= simpsons.length; i++) { //берет длину массива;
//     const simpson = simpsons[i];  //в этот объект попадает объекты из  массива с индексом [i];
//     console.log(simpson); //выводит переменную с объектом из массива под индексом [i];
//     document.write(`<div>
//                         <h2>${simpson.name}</h2>   <!--берет из объекта значение ключа name-->
//                         <img src="${simpson.photo}" alt="simpson">
//                         <p>${simpson.info}</p>
//
//                     </div>`);
// }  // массив от 0 и до... вызывается itar;
//
// for (let i = simpsons.length - 1; i >= 0; i--) {
//     const simpson = simpsons[i];
//     console.log(simpson);   //выводит переменную с объектом из массива под индексом [i];
//     document.write(`<div>
//
//     <h2>${simpson.name}</h2>   <!--берет из объекта значение ключа name-->
//     <img src="${simpson.photo}">
//     <p>${simpson.info}</p>
//
//     </div>`);}      //массив от .. и до 0 .вызывается ritar;


for (let simpsonMember of simpsons) {
    // выполняет функцию обычного цикла с условием выполнения строго от начала до конца
}


// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];
//
// for (const coursesItem of courses){    //coursesItem = n-элемент массива.
//     let modules = coursesItem.modules; //modules = массив которому присвоены элементы массива modules который внутри обьекта(coursesItem)
//     console.log(modules);              //выводим массив с с модулями
//     for (const module of modules) {    // module = n-элемент массива modules
//         console.log(module)            // выводим каждыйы элемент массива modules по отдельности
//     }
//
// }


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
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
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
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
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
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
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];


// for (const coursesItem  of coursesArray) {
//     document.write(`<div>`);
//         document.write(`<h2>${coursesItem.title}</h2>`);
//         document.write(`<ul>`);
//             for (const module of coursesItem.modules) {
//                 document.write(`<li>${module}</li>`)
//             }
//         document.write(`</ul>`);
//     document.write(`</div>`);
//
//
// }

//     let i = 0;
//     while (i < coursesArray.length) {
//         let coursesItem = coursesArray[i];
//         document.write(`<div>`);
//         document.write(`<h2>${coursesItem.title}</h2>`);
//         document.write(`<ul>`);
//             for (const module of coursesItem.modules) {
//                 document.write(`<li>${module}</li>`)
//             }
//         document.write(`</ul>`);
//     document.write(`</div>`);
//         i++;
//     }
//
//     do {
//         console.log('213weq');
//     } while (false);
//
//
//     let user = {
//         mane: 'asd',
//         age: 123,
//         status:true
//     };
//
// for (let key in user) {
//     console.log(key, key,user[key])
// }
//
// let arr = [];
// for (const arrElement of arr) {
//     if (arrElement === 0) {
//         console.log(0)
//     }
// }
//

let users = [
    {name: 'asd', age: 213, status: true, foo:'bar'},
    {name: 'asd', age: 213, status: true, foo:'bar'},
    {name: 'asd', age: 213, status: true, foo:'bar'}
]


    for (const user of users) {
        console.log(user);
        for (const userKey in user) {
            console.log(userKey, '-', user[userKey]);
        }
}
