let url = new URL(location.href);
console.log(url)
let id = +url.search.replace(/\D+/g,"")
console.log(id)

let user = new URL('https://jsonplaceholder.typicode.com/users/'+id);
fetch(user)
.then(user => user.json())
.then(user => {
    for (const key in user) {
        console.log(key,'-',user[key])
    }
})