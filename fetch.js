// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(json => console.log(json));



// console.log('This is a fetcing');


// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// fetch(url)
//     .then(res => res.json())
//     .then(json => console.log(json));

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json));

}



