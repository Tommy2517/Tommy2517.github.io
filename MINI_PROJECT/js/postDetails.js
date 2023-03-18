let urlPost = new URL(location.href)
let id = +urlPost.search.replace(/\D+/g, "");

fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(post => post.json())
    .then(post => {
        for (const key in post) {
            let divDetail = document.createElement('div')
            divDetail.classList.add('divDetail');

            let divKey = document.createElement('div');
            divKey.classList.add('divKey');
            divKey.append(key + ':');

            let divValue = document.createElement('div');
            divValue.classList.add('divValue');
            divValue.append(post[key])

            document.querySelector('.post_details').append(divDetail)
            divDetail.append(divKey, divValue)


        }
    })

//////////////
fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    .then(comment => comment.json())
    .then(comment => {
        for (const key in comment) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');

            let comments = document.querySelector('.comments > .content');
            comments.append(commentDiv);
            commentDiv.append(comment[key].body);

            let postID = document.createElement('div');
            postID.classList.add('postID');
            postID.append('postID - ', comment[key].postId);

            let commentID = document.createElement('div');
            commentID.append('commentID - ', comment[key].id)
            commentID.classList.add('commentID');

            let name = document.createElement('div');
            name.classList.add('name');
            name.append('name - ', comment[key].name);

            let email = document.createElement('div');
            email.classList.add('email');
            email.append('email - ', comment[key].email);

            let postBody = document.createElement('div');
            postBody.classList.add('postBody');

            let commentDivInfo = document.createElement('div')
            commentDivInfo.classList.add('commentDivInfo')
            commentDivInfo.append(name, email, commentID, postID)

            commentDiv.append(commentDivInfo)

            commentDiv.onclick = function (eo) {
                commentDiv.classList.toggle('commentHover')
                commentDivInfo.classList.toggle('commentDivInfo')
            }
        }
    })