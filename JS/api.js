function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.completed))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
};

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
};

function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    /* const ulList = document.getElementById(users);
    for (const user of users) {
        const list = document.createElement('li');
        list.innerText = user.name;
        ulList.appendChild(list);
    } */
    /* const ulList = document.getElementById('users');
    for (const user of users)
    const list = document.createElement('li');
    list.innerText = 'ami';
    ulList.appendChild(list) */

}