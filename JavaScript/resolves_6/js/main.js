// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('task-1:', 'hello world'.length, '-', 'lorem ipsum'.length, '-', 'javascript is cool'.length)
/////////////////////////////////////////////////////////////////////////////////////////////////////

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('task-2:', 'javascript is cool'.toUpperCase(), '-', 'lorem ipsum'.toUpperCase(), '-', 'hello world'.toUpperCase())
/////////////////////////////////////////////////////////////////////////////////////////////////////


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('task-3:', 'javascript is cool'.toLowerCase(), '-', 'lorem ipsum'.toLowerCase(), '-', 'hello world'.toLowerCase())
/////////////////////////////////////////////////////////////////////////////////////////////////////


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = '        dirty string   ';
console.log('task-5:', str);

function sweeper(str) {
    let delimiter = str.split('');
    let collector = '';
    while (delimiter[0] === ' ') {
        delimiter.shift()
    }
    while (delimiter[delimiter.length - 1] === ' ') {
        delimiter.pop()
    }
    for (const item of delimiter) {
        collector += item;
    }
    return collector; //тут я щось страшне намутив вибачте( аж голова закипiла
}

str = sweeper(str)
console.log('task-5:', str);
/////////////////////////////////////////////////////////////////////////////////////////////////////


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
let arr = str2.split(' ')
console.log('task-6:', arr);
/////////////////////////////////////////////////////////////////////////////////////////////////////


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
arr2 = arr2.map((value) => value + '')
console.log('task-7:', arr2);
/////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
function sortNums(arr, act) {
    if (act === 'ascending') {
        console.log('task-8: ascending = ', arr.sort((a, b) => a - b));
    }
    if (act === 'descending') {
        console.log('task-8: descending =', arr.sort((a, b) => b - a));
    }
}
sortNums(nums, 'ascending'); // [3,11,21]
sortNums(nums, 'descending'); // [21,11,3]
//
// ==========================


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) =>{
    if (a.monthDuration < b.monthDuration){
        return 1
    }
    if (a.monthDuration > b.monthDuration){
        return -1
    }
    if (a.monthDuration === b.monthDuration){
        return 0
    }
})
console.log('task-7/1:',coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log('task-7/2:',coursesAndDurationArray);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray = coursesAndDurationArray.map((value,index)=>{
    return { id:index+1,title: value.title, monthDuration: value.monthDuration}
})
console.log('task-7/3:',coursesAndDurationArray);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
    let cards = [
    {cardSuit: 'spade',value:6,color:'black'},
    {cardSuit: 'spade',value:7,color:'black'},
    {cardSuit: 'spade',value:8,color:'black'},
    {cardSuit: 'spade',value:9,color:'black'},
    {cardSuit: 'spade',value:10,color:'black'},
    {cardSuit: 'spade',value:'jack',color:'black'},
    {cardSuit: 'spade',value:'queen',color:'black'},
    {cardSuit: 'spade',value:'king',color:'black'},
    {cardSuit: 'spade',value:'ace',color:'black'},

    {cardSuit: 'clubs',value:6,color:'black'},
    {cardSuit: 'clubs',value:7,color:'black'},
    {cardSuit: 'clubs',value:8,color:'black'},
    {cardSuit: 'clubs',value:9,color:'black'},
    {cardSuit: 'clubs',value:10,color:'black'},
    {cardSuit: 'clubs',value:'jack',color:'black'},
    {cardSuit: 'clubs',value:'queen',color:'black'},
    {cardSuit: 'clubs',value:'king',color:'black'},
    {cardSuit: 'clubs',value:'ace',color:'black'},

    {cardSuit: 'diamond',value:6,color:'red'},
    {cardSuit: 'diamond',value:7,color:'red'},
    {cardSuit: 'diamond',value:8,color:'red'},
    {cardSuit: 'diamond',value:9,color:'red'},
    {cardSuit: 'diamond',value:10,color:'red'},
    {cardSuit: 'diamond',value:'jack',color:'red'},
    {cardSuit: 'diamond',value:'queen',color:'red'},
    {cardSuit: 'diamond',value:'king',color:'red'},
    {cardSuit: 'diamond',value:'ace',color:'red'},

    {cardSuit: 'heart',value:6,color:'red'},
    {cardSuit: 'heart',value:7,color:'red'},
    {cardSuit: 'heart',value:8,color:'red'},
    {cardSuit: 'heart',value:9,color:'red'},
    {cardSuit: 'heart',value:10,color:'red'},
    {cardSuit: 'heart',value:'jack',color:'red'},
    {cardSuit: 'heart',value:'queen',color:'red'},
    {cardSuit: 'heart',value:'king',color:'red'},
    {cardSuit: 'heart',value:'ace',color:'red'},
]

// - знайти піковий туз
let spadeAce = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log('task-8/1:',spadeAce);


// - всі шістки
let sixAll = cards.reduce((acc,value) => {
    if (value.value === 6){
        acc.push(value)
    }
    return acc;
},[])
console.log('task-8/2:',sixAll);


// - всі червоні карти
let redAll = cards.reduce((acc,value) => {
    if (value.color === 'red'){
        acc.push(value)
    }
    return acc;
},[])
console.log('task-8/3:',redAll);


// - всі буби
let diamondAll = cards.reduce((acc,value) => {
    if (value.cardSuit === 'diamond'){
        acc.push(value)
    }
    return acc;
},[])
console.log('task-8/4:',diamondAll);


// - всі трефи від 9 та більше
let clubsAll = cards.reduce((acc,value) => {
    if (value.cardSuit === 'clubs' && (value.value >= 9 || typeof value.value === 'string')){
        acc.push(value)
    }
    return acc;
},[])
console.log('task-8/5:',clubsAll);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardSuits = cards.reduce((acc,value) => {
    if (value.cardSuit === 'spade'){
        acc.spades.push(value)
    }
    if (value.cardSuit === 'diamond'){
        acc.diamonds.push(value)
    }
    if (value.cardSuit === 'heart'){
        acc.hearts.push(value)
    }
    if (value.cardSuit === 'clubs'){
        acc.clubs.push(value)
    }
    return acc;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log('task-9:',cardSuits);


// =========================



//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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


// --написати пошук всіх об'єктів, в який в modules є sass
let sassFind = coursesArray.reduce((acc,value) => {
   if (value.modules.includes('sass')){
       acc.push(value)
   }
   return acc
}, [])
console.log('task-10:',sassFind);


// --написати пошук всіх об'єктів, в який в modules є docker
let dockerFind = coursesArray.reduce((acc,value) => {
    if (value.modules.includes('docker')){
        acc.push(value)
    }
    return acc
}, [])
console.log('task-10/1:',dockerFind);
















