// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



// Масиви та об'єкти:
//1: Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
{
    let array_1 = [123, 321, 'qwe', 'asd', true, false, NaN, undefined, null, {name: 'ru_sheep', road: 'on_dick'}]
    console.log(array_1)
}


//2: 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    let obj1 = {
    title: 'book_1',
    pageCount: 500,
    genre: 'Detective',
    }
    let obj2 = {
        title: 'book_1',
        pageCount: 600,
        genre: 'History',
    }
    let obj3 = {
        title: 'book_3',
        pageCount: 700,
        genre: 'Fantasy',
    }
}


//3: 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
{
    let obj1 = {
        title: 'book_1',
        pageCount: 500,
        genre: 'Detective',
        authors: [
            author_1 = { name: 'Richard Stark', age: 75},
            author_2 = { name: 'Richard Stark', age: 75},
            author_3 = { name: 'Richard Stark', age: 75}
        ]
    }
    let obj2 = {
        title: 'book_2',
        pageCount: 600,
        genre: 'History',
        authors: [
            author_4 = { name: 'Richard Stark', age: 75},
            author_5 = { name: 'Richard Stark', age: 75},
            author_6 = { name: 'Richard Stark', age: 75}
        ]
    }
    let obj3 = {
        title: 'book_3',
        pageCount: 700,
        genre: 'Fantasy',
        authors: [
            author_4 = { name: 'Richard Stark', age: 75},
            author_5 = { name: 'Richard Stark', age: 75},
            author_6 = { name: 'Richard Stark', age: 75}
        ]
    }
}


//4: Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.
{
    let usersList = [
        {
            name: 'Leanne Graham',
            username: 'Bret',
            password: 'Password12345',
        },
        {
            name: 'Ervin Howell',
            username: 'Antonette',
            password: 'Password12346',
        },
        {
            name: 'Clementine Bauch',
            username: 'Samantha',
            password: 'Password12347',
        },
        {
            name: 'Patricia Lebsack',
            username: 'Karianne',
            password: 'Password12348',
        },
        {
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            password: 'Password12349',
        },
        {
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            password: 'Password12340',
        },
        {
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            password: 'Password12341',
        },
        {
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            password: 'Password12342',
        },
        {
            name: 'Glenna Reichert',
            username: 'Delphine',
            password: 'Password12343',
        },
        {
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            password: 'Password12344',
        }
    ];
    console.log(usersList[0].password, usersList[1].password, usersList[2].password, usersList[3].password, usersList[4].password, usersList[5].password, usersList[6].password, usersList[7].password, usersList[8].password, usersList[9].password, )

}



// Логічні розгалуження:
//1: Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let x = prompt(' Введiть Значення х для task Логічні розгалуження №1:');
    if (x != 0) {console.log('Вірно')
    } else {console.log('Невірно')}
}//  не змiг зробити перевiрку на тип даних


//2: Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
{
    let time = prompt('Task №2 Скильки зараз хвивлин на годиннику? :');
    let asd = (time >= 0 && time <= 14) ? 'Перша чверть'
        : (time >= 15 && time <= 29) ? 'Друга чверть'
        : (time >= 30 && time <= 44) ? 'Третя чверть'
        : (time >= 45 && time <= 59) ?'Четверта чверть'
        : 'Не вiрний ввод'
    console.log(asd);
}


//3: У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    let day = prompt('Task №3 Напишiть яке сьогоднi число : ')

    if (day > 0 && day <= 10) {
        console.log('Перша декада')
    } else if (10 < day && day <= 20) {
        console.log('Друга декада')
    } else if (20 < day && day <= 30) {
        console.log('Третя декада')
    } else if (30 < day && day <= 31) {
        console.log('Четверта декада')
    } else console.log('Та не бреши)');
}


//4: Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
{
    let dayNumber = prompt('Введiть день за номером вiд 1 до 7 :')
    switch (dayNumber) {
        case '1':
            console.log('Понедiлок - Monday')
            break;
        case '2':
            console.log('Вiвторок - Tuesday')
            break;
        case '3':
            console.log('Середа - Wednesday')
            break;
        case '4':
            console.log('Четвер - Thursday')
            break;
        case '5':
            console.log("П'ятниця - Friday")
            break;
        case '6':
            console.log('Субота - Saturday')
            break;
        case '7':
            console.log('Недiля - Sunday')
            break;
        default:
            console.log('Не чув про такi днi')
    }
}

//5: - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
{
    let number_1 = prompt('Task №5 Введiть перше чысло :')
    let number_2 = prompt('Task №5 Введiть друге чысло :')
    if (number_1 > number_2) {
        console.log('Перше число бiльш за друге!')
    }else if (number_1 < number_2) {
        console.log('Друге число бiльш за Перше!')
    }else if (number_1 === number_2){
        console.log('Числа рiвнi!')
    }
}


//6: є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
{
    let x = undefined;
    if (x == null || x == undefined || x == false) {
        num = 'default'
        console.log(num)
    }
}



//7: з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log(coursesAndDurationArray[0].title,'Супер!')}
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log(coursesAndDurationArray[1].title,'Супер!')}
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log(coursesAndDurationArray[2].title,'Супер!')}
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log(coursesAndDurationArray[3].title,'Супер!')}
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log(coursesAndDurationArray[4].title,'Супер!')}
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log(coursesAndDurationArray[5].title,'Супер!')}

}