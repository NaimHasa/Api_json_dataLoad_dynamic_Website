function loadUser3() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(data => displayShowData(data));
}

function displayShowData(data) {
    const div = document.getElementById('img-container')
    for (const users of data) {
        console.log(users);
        const li = document.createElement('li');
        li.innerText = users.id
            ;
        div.appendChild(li);

    }
}