let urlPost = new URL(location.href)
let id = +urlPost.search.replace(/\D+/g,"");

fetch('https://jsonplaceholder.typicode.com/posts/'+id)
.then(post => post.json())
.then(post => {
    for (const key in post) {
        let divDetail = document.createElement('div')
        divDetail.classList.add('divDetail');

        let divKey = document.createElement('div');
        divKey.classList.add('divKey');
        divKey.append(key+':');

        let divValue = document.createElement('div');
        divValue.classList.add('divValue');
        divValue.append(post[key])

        document.querySelector('.post_details').append(divDetail)
        divDetail.append(divKey,divValue)

    }
})

fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
.then(comment => comment.json())
.then(comment => {
    for (const commentKey in comment) {
        console.log(comment[commentKey])
    }
})