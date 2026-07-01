// // model
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => {
//     console.log("status: ", response.status, response.statusText);

//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }

//     return response.json()
// })
// .then((post) => {
//     console.log("title: ", post);
// })
// .catch((err) => {
//     console.error("failed: ", err.message);
// })

// 1

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((resoponse) => resoponse.json())
// .then((post) => {
//     console.log(post.title)
// })

// 2

// fetch("https://jsonplaceholder.typicode.com/notfound")
// .then((response) => {
//     console.log("status: ", response.status, response.statusText)

//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }

//     return response.json()
// })
// .then((post) => post.title)
// .catch((err) => console.error("failed: ", err))

// 3

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     console.log("status: ", response.status, response.statusText)

//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }

//     return response.json()
// })
// .then((arrPosts) => {
//     for (post of arrPosts) {
//         console.log(post.title)
//     }
// })

// 4

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         "title": "my new post",
//         "body": "body of the post",
//         "userID": 1
//         })
// }
// )
// .then((response) => {
//     if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}, ${response.statusText}`)
//     }
//     return response.json()
//     }
// )
// .then((post) => console.log(post))
// .catch((err) => console.error("failed: ", err))

// 5

// const getUserById = (id) => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((response) => {
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     console.error(`user ${id} not found`);
//                 }

//                 throw new Error(`HTTP Error: ${response.status}`);
//             }

//             return response.json();
//         })
//         .then((user) => user)
//         .catch((err) => console.error("failed: ", err.message))
// };

// getUserById(8)

// 6
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => {
//     console.log("status: ", response.status, response.statusText)
//     if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`)
//     }
//     return response.json()
// })
// .then((post) => post.userId)
// .then((userID) => {
//     console.log("userId: ", userID)
//     getUserById(userID)
//     .then(user => console.log("user name: ", user.name))}
//     )
// .catch((err) => console.error(err))

//  7

function handleResponse(res) {
    if (!res.ok) {
        throw new Error(
            `HTTP Error \nstatus: ${res.status} \ndetails: ${res.statusText}`,
        );
    }
    return res.json();
}

// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/us2ers/1").then(handleResponse),
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(handleResponse),
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then(handleResponse)
// ])
// .then((data) => console.log(data))
// .catch((err) => console.error("failed: ", err.message))

// 8

// const controller = new AbortController()
// const {signal} = controller;

// fetch("https://jsonplaceholder.typicode.com/posts", {signal})
// .then(handleResponse)
// .then(data => console.log(data))
// .catch((err) => console.error("failed: ", err.message))

// setTimeout(() => {
//     controller.abort()
// }, 3000);

// 9

// async function fetchWithRetry(url, retries) {
//     let status = false;
//     let i = 0;
//     while (i < retries && !status) {
//         console.log(i);
//         const res = await fetch(url);
//         console.log(res.status);
//         status = res.ok;
//         i++;

//     }
// }


// fetchWithRetry("https://jsonplaceholder.typicode.com/users/100", 4);
