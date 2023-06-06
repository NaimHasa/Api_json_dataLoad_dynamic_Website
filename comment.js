function commentContainer() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res => res.json())
        .then(data => displayData(data));

}

function displayData(comments) {
    const commentContainer = document.getElementById('comment-container');

    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML =
            `
             <h1>Name: ${comment.name}</h1>
             <h4>Email: ${comment.email}</h4>
             <p>body: ${comment.body}</p>
        
        `

        commentContainer.appendChild(commentDiv);

    }

}





commentContainer();

