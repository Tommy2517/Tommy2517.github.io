

let urlUser = new URL(location.href);
let id = +urlUser.search.replace(/\D+/g,"");


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
                tag.append(underTag);
            }
        }
        return tag;
    }

    document.querySelector('.address>.content')
        .append(reformer(user.address,'ul','li'));

    document.querySelector('.address>.content')
        .append('geo: ',reformer(user.address.geo,'ul','li'));

    document.querySelector('.info>.content')
        .append(reformer(user,'ul','li'));

    document.querySelector('.company>.content')
        .append(reformer(user.company,'ul','li'));
})

let btn_posts = document.getElementById('btn_posts');
let divPosts = btn_posts.nextElementSibling;
btn_posts.onclick = function (eo){
    divPosts.classList.toggle('posts_after');

}


fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
    .then(posts => posts.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div');
            let p = document.createElement('p')
            p.append(post.title);
            div.append(p)
            div.classList.add('post');
            divPosts.append(div);

            let post_id = post.id
            console.log(post_id)

            let post_btn = document.createElement('a');
            post_btn.classList.add('post_btn');
            post_btn.innerText = 'more'
            post_btn.href = 'post_details.html?id='+post_id


            div.append(post_btn)
        }
    })

