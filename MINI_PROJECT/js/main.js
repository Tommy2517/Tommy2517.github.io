//////////////////////////////index////////////////////////

let users = new URL('https://jsonplaceholder.typicode.com/users')
fetch(users)
    .then(users => users.json())
    .then(users => {
        for (const user of users) {

            let div = document.createElement('div');
            let a = document.createElement('a');

            div.classList.add('user');
            div.append(user.id,' - ',user.name,a);

            a.append('details');
            a.classList.add('btn_index')
            a.href = `user_details.html?id=${user.id}`;

            document.getElementById('users_s1').append(div)
        }
    })


////////////////////////user_details//////////////////////////////
