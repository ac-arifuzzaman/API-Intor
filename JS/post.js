function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPost()
function displayPost(posts) {
    const postContainer = document.getElementById('block');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('arif');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div);
        console.log('This is my title -$:', post.title);
    }
}

/* function loadPOst() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

loadPOst()

function displayPost(posts) {
    const postContainer = document.getElementById('block');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('arif');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post.id)
    }
} */
