//////////////////////////////index////////////////////////

let users = new URL('https://jsonplaceholder.typicode.com/users')
fetch(users)
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.append(user.id + ' ' + user.name)
            let a = document.createElement('a')
            a.append(div);
            a.href = `user_details.html?id=${user.id}`
            document.body.append(a)
        }
    })

////////////////////////user_details//////////////////////////////
