// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<div>`)
for (let i = 0; i < 10; i++){
    document.write(`<div style="color: yellow">hello</div>`)
}document.write(`</div>`)
//===============================================================================================================


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div>`)
for (let i = 0; i < 10; i++){
    document.write(`<div style="color: green">hello ${i} okten</div>`)
}document.write(`</div>`)
//===============================================================================================================


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<div>`)
    let i = 0;
    while (i < 20){
        document.write(`<h2 style="color: purple">hello</h2>`)
        i++;
    }document.write(`</div>`)
//===============================================================================================================


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<div>`)
let i2 = 0;
while (i2 < 20){
    document.write(`<h2 style="color: #005e80">hello ${i2} okten</h2>`)
    i2++;
}document.write(`</div>`)


//===============================================================================================================
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let i = 0; i < listOfItems.length;i++){
    document.write(`<li>${listOfItems[i]}</li>`)
}document.write(`</ul>`)
//===============================================================================================================



//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// --------------------
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write(`<div class="products">`)
    for (const product of products) {
        document.write(`<h3 class="product-title">${product.title}. Price - ${product.price} </h3>`)
        // for (const productKey in product) {
        //     document.write(`${productKey} - ${product[productKey]}`)
        // } вибачаюсь щось замучився вжеза допомогою forin витягувати price, а ще де кiлька завдань осталось, тому просто впишу його тай все
        document.write(`<img class="product-image" src="${product.image}" alt="">`)
    }
document.write(`</div>`)
//===============================================================================================================



//     є масив

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasil', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olga', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olga', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<div>`)
// for (const usersKey in users) {
//     if (users[usersKey].status){
//         const user = usersKey;
//     document.write(`<div>${user}</div>`)}
// }
    document.write(`<h3>користувачі зі статусом true</h3>`)
    for (let i = 0;i < users.length;i++) {
        const user = users[i];
        if (users[i].status){
            document.write(`<div>${user.name}</div>`)
        }}
    document.write(`<h3>користувачі зі статусом false</h3>`)
    for (let i = 0;i < users.length;i++) {
        const user = users[i];
        if (!users[i].status){
            document.write(`<div>${user.name}</div>`)
        }}
    document.write(`<h3>користувачі які старші за 30 років</h3>`)
    for (let i = 0;i < users.length;i++) {
        const user = users[i];
        if (users[i].age > 30){
            document.write(`<div>${user.name}</div>`)
        }}
document.write(`</div>`)

//===============================================================================================================
