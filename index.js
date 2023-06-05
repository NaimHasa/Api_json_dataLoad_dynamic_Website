function loadUser2() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(res => res.json())
        .then(data => displayLoadData(data));
}

function displayLoadData(data) {
    const ul = document.getElementById('users-list');
    for (const users of data) {
        const li = document.createElement('li');
        const p = document.createElement('p');

        li.innerText = users.title;
        p.innerText = users.body;
        ul.appendChild(li);
        ul.appendChild(p);
    }



}