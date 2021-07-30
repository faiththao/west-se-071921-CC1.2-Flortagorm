console.log("you got this!");
const imgURL = "https://distinct-vaulted-freesia.glitch.me/image";
const title = document.getElementById('fg-title');
const img = document.getElementById('fg-image');
const likeButtn = document.getElementById('like-button');
const fglikes = document.getElementById('fg-likes');
const fgComments = document.getElementById('fg-comments');
const commentForm = document.getElementById('comment-form');




fetch(imgURL)
.then(res => res.json())
.then(addData)

function addData(data) {
    title.innerHTML = data.title;

    img.src = data.image;

    fglikes.innerHTML = data.likes;

    replaceComments(data.comments);
}

let likes = 19;

likeButtn.addEventListener('click', () => {
    likes += 1
    increaseLikes()
});

function increaseLikes() {
    fglikes.innerHTML = `${likes} likes`;
}

function replaceComments(comments) {
    fgComments.innerHTML = ''
    comments.forEach(comment => addNewComment(comment.content))
}

commentForm.addEventListener('submit', e => {
    e.preventDefault();
    addNewComment(e.target.comment.value);
    e.target.comment.value = '';
});

function addNewComment(comment) {
    const newLi = document.createElement('li');
    newLi.innerHTML = comment;
    fgComments.append(newLi);
}