function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}


function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    console.log(data);
}