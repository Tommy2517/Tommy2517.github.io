//===================TASK_1=============================//
let form_1_btn = document.forms.form_1.form_1_btn
let user_block = document.getElementById('user_block')

let user_form_1 = document.createElement('div');
user_form_1.classList.add('user_form_1');

if (JSON.parse(localStorage.getItem('user_s_1'))){
    user_block.append(user_form_1);

    for (const item in JSON.parse(localStorage.getItem('user_s_1'))){
        let strH3 = document.createElement('h3');
        strH3.innerText = `${item} - ${JSON.parse(localStorage.getItem('user_s_1'))[item]}`;
        user_form_1.append(strH3);
    }
}
form_1_btn.onclick = function (eo) {
    eo.preventDefault();

    class User_s_1 {
        constructor(name,surname,age) {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }
    }
    let user_s_1 = JSON.parse(localStorage.getItem('user_s_1')) || 0;

    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let age = document.getElementById('age').value

if (name !==''){
    localStorage.setItem('user_s_1',JSON.stringify(new User_s_1(name,surname,age)));
    user_form_1.innerHTML = '';
    for (const item of document.forms.form_1){
        if (item.required && item.value!=='') {
            let strH3 = document.createElement('h3');
            strH3.innerText = `${item.name} - ${item.value}`;
            user_form_1.append(strH3);
        }
        item.value = '';
    }
    user_block.append(user_form_1);}
}

//===================TASK_2=============================//
let nums = JSON.parse(localStorage.getItem('nums')) || 0;
nums++;
localStorage.setItem('nums',JSON.stringify(nums));
document.getElementsByClassName('number_s_2')[0].append(nums);

//===================TASK_3=============================//
document.getElementById('button_s_3').onclick = function (eo) {
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

    let time = `${moment.getHours()}:${moment.getMinutes()}:${moment.getSeconds()}`

    session.push(new Session(date,time))
    localStorage.setItem('sessions', JSON.stringify(session))
}

//===================TASK_4=============================//
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(postsArray => localStorage.setItem('key44',JSON.stringify(postsArray)))
let object100 = JSON.parse(localStorage.getItem('key44'))

let prew = document.getElementById('prew');
let next = document.getElementById('next');
let block = document.getElementById('block_s4');

for (let i=0;i<10;i++){
    let card_s4 = document.createElement('div');
    card_s4.setAttribute('id','card_s4');

    let h1 = document.createElement('p')
    h1.innerText= object100[i].id

    let p =document.createElement('p')
    p.innerText = object100[i].title

    block.append(card_s4)
    card_s4.append(h1)
    card_s4.append(p)
}

let prew_n = 0;
let next_n = 10;


prew.onclick = function (eo) {
    eo.preventDefault();




}

next.onclick = function (eo) {
    document.getElementById('block_s4').innerHTML = ''
    eo.preventDefault();

    for (prew;prew_n<next_n;prew_n++){

        let card_s4 = document.createElement('div');
        card_s4.setAttribute('id','card_s4');

        let h1 = document.createElement('p')
        h1.innerText= object100[prew_n].id

        let p =document.createElement('p')
        p.innerText = object100[prew_n].title

        block.append(card_s4)
        card_s4.append(h1)
        card_s4.append(p)
    }


}