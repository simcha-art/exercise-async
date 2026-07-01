// 5

// async function printResponse(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// printResponse("https://jsonplaceholder.typicode.com/todos/1")

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res => res.json())
//   .then(data => console.log(data));

// 6

// async function Done() {
//     return "Done"
// }

// Done().then((msg) => console.log(msg))

// // 7

// async function square(num) {
//     return await (num ** 2)
// }

// square(5).then(res => console.log(res))

// // 14

// async function twoUrls(url1, url2) {
//     const res1 = await fetch(url1);
//     const res2 = await fetch(url2)
//     return {res1, res2}
// }

// 15 & 16

async function handleRequest(res) {
    if (!res.ok) {
        throw new Error(`Error: HTTP\n status: ${res.status}\n message: ${res.statusText}`)
    }

    return await res.json()
}

// async function threeUrls(url1, url2, url3) {
//     const  [data1, data2, data3] = await Promise.all([
//         fetch(url1).then(handleRequest),
//         fetch(url2).then(handleRequest),
//         fetch(url3).then(handleRequest),
//     ]);
//     return { data1, data2, data3 };
// }

// threeUrls("https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2", "https://jsonplaceholder.typicode.com/todos/3")
// .then(data => console.log(data))


// //18
// async function urls(arrUrls) {
//     const allResponses = []
//     for (const url of arrUrls) {
//         const data = await fetch(url).then(handleRequest)
//         allResponses.push(data)
//     }
//     return allResponses
// }

const arr = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2", "https://jsonplaceholder.typicode.com/todos/3"]

// urls(arr).then((data) => console.table(data))

// 19

async function smartUrls(arrUrls) {
    const allResponses = Promise.all(arrUrls.map((url) => fetch(url).then(handleRequest)))
    return allResponses
}

// smartUrls(arr).then((data) => console.table(data))