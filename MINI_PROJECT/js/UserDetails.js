let url = new URL(location.href);
let id = +url.search.replace(/\D+/g,"")


let user = new URL('https://jsonplaceholder.typicode.com/users/'+id);
fetch(user)
.then(user => user.json())
.then(user => {
    function reformer(obj,tag,unTag) {
        tag = document.createElement(tag);
        for (const key in obj) {
            if (typeof obj[key] !== "object") {
                let underTag = document.createElement(unTag);
                underTag.append(key, ' - ', obj[key]);
                tag.append(underTag)
            }
        }
        return tag
    }
    document.querySelector('.address')
        .append(reformer(user.address,'ul','li'))
    document.querySelector('.info')
        .append(reformer(user,'ul','li'))
    document.querySelector('.company')
        .append(reformer(user.company,'ul','li'))
})