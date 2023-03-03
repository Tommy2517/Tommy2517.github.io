// console.log(document) //document является файлом html к которому подключен данный скрипт
// console.log(document.head)//показывает содержимое тега head
// console.log(document.head.innerHTML)//возвращает текст который внутри head нашего html документа
console.log(document);
console.log(document.body);

// getElementById находит элемент по идентификатору. возвращает объект
let byId1 = document.getElementById('list-1');
console.log(byId1);

//находит элементЫ по классу и возвращает псевдомассив. c DOM элементами
let byClass = document.getElementsByClassName('menu')
console.log(byClass)//массив
console.log(byClass[0])//объект ДОМ структуры

//Находит элементы по тэгу и возвращает объект DOM
let uLS_tagSearch = document.getElementsByTagName('ul')
for (const uLSTagSearch of uLS_tagSearch) {
    console.log(uLSTagSearch)
}

//Находит элементы по тэгу и возвращает массив HTMLCollection
let liList = document.getElementsByTagName('li');
console.log(liList);


//Найти li в конкретном Ul-е:
let ulList = document.getElementsByTagName('ul')
let ul2 = ulList[1];
console.log(ul2.getElementsByTagName('li'));

console.log(
    document
        .getElementsByTagName('ul')[1]
        .getElementsByTagName('li'));

let hiList = document.getElementsByTagName('h1');
let h1 = hiList[0];
console.log(h1)
console.log(h1.innerText) //вернет текст внутри тега h1
console.log(h1.innerHTML) //вернет все содержимое внутри тега h1 включая другие тэги

h1.innerText = 'hello'//изменяем содержимое внутри тега h1
h1.innerHTML = '<i>hello</i>'//

h1.style.background = 'orange'//добавляет инлайновые стили к тегу

//добираемся ко всему списку классов которые есть в определенном теге с помощью classList
console.log(h1.classList)//возвращает псевдомассив с элементами в которых классы тега
h1.classList.add('target');//добавляет новый класс тегу
h1.classList.remove('target');//удаляет класс у тега
h1.classList.toggle('target');//удаляет класс у тега если он есть и добавляет если его нет

h1.setAttribute('id','h1_1',);//добавляет тегу атрибут
console.log(h1.getAttribute('id'));//возвращает содержимое данного атрибута

//от элементов к которым имеем доступ, можно достать до соседей
console.log(h1.nextElementSibling);//покажет следующий элемент под нашим h1
let menus = document.getElementsByClassName('menu');
for (const item of menus) {//здесь мы каждому объекту меню присваиваем стили
    item.style.background = 'silver'
    item.style.fontSize = '23px'
}


let ul1 = document.getElementById('list-2');
console.log(ul1.children); //достает в массиве все дочерние элементы
console.log(ul1.childNodes);//показывает все элементы внутри тега так же пробелы и переносы
//и даже коментарии
console.log(ul1.childNodes[0].nodeType);//возвращает тип. 3- текст. 1-тэг. 8-комментраий.
for (const item of ul1.childNodes) {
    if (item.nodeType ===1){
        console.log(item, 'tag')
    }
    else if (item.nodeType ===3){
        console.log(item, 'text')
    }
    else if (item.nodeType ===8){
        console.log(item, 'comment')
    }
}


//еще один вариант поиска по DOM структуре. Метод - querySelector.
let element = document.querySelector('ul');
console.log(element); //возвращает первый попавшийся элемент с тегом ul
//но этот элемент является узлом. поэтому в нем может не быть некоторох элементов которые есть
//в элементах которые мы болучили другими способами типа getElementById и тд...


// let nodeListOfUl = document.querySelectorAll('ul');
//этот способ очень любят верстальщики так как используя этот метод мы работаем с синтаксисом css
//Например:
let nodeListOfUl = document.querySelectorAll('ul#list-1.menu > li');
console.log(nodeListOfUl);//возвращает массив узлов Подробнее в видео js_lesson_9_DOM(60:00)мин




