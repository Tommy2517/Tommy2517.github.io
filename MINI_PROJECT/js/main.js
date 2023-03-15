//////////////////////////////index////////////////////////

let users = new URL('https://jsonplaceholder.typicode.com/users')
fetch(users)
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.append(user.name);
            let a = document.createElement('a');
            a.append(user.id,div);
            a.classList.add('user');
            a.href = `user_details.html?id=${user.id}`;

            document.getElementById('users_s1').append(a)
            // document.body.append(a);
        }
    })


////////////////////////user_details//////////////////////////////
