function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => displayPost(data));


}

function displayPost(post) {
    const postContainer = document.getElementById('post_container');
    for (const posts of post) {
        const div = document.createElement('div');
        div.innerHTML =
            `
        <h1>${posts.name}</h1>
        <h5>${posts.email}</h5>
        <p>${posts.body}</p>
        
        `
        postContainer.appendChild(div);
    }



}