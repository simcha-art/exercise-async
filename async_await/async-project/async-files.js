// import fs from "fs";

// fs.readFile("input.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err.message)
//     } else {
//         console.log("תוכן הקובץ: \n", data)
//     }
// })

// fs.writeFile("output.txt", "נכתב בהצלחה על ידי Node.js!", (err) => {
//     if (err) {
//         console.error("שגיאה בכתיבה: ", err.message)
//     } else {
//         console.log("הקובץ נכתב בהצלחה")
//     }
// })

// 3

// fs.readFile("input.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err.message)
//     } else {
//         const msg = data.toUpperCase()
//         fs.writeFile("output-upper.txt", msg, (err) => {
//             if (err) {
//                 console.error(err.message)
//             } else {
//                 console.log("Everything has completed successfully")
//             }
//         })
//     }
// })

import fs from "fs/promises";

// try {
//     console.log(await fs.readFile("input.txt", "utf8"))
//     console.log("I have read it with promise")
// } catch(err) {
//     console.error("Error: ", err.message)
// }

// 5
// try {
//     let input = await fs.readFile("input.txt", "utf8");
//     input = input.toUpperCase();
//     await fs.writeFile("output-upper.txt", input);
//     console.log("Everything completed successfully");
// } catch (err) {
//     console.error("Error: ", err.message);
// }

// 6

// const [data1, data2] = await Promise.all([
//     fs.readFile("input.txt", "utf8"),
//     fs.readFile("output.txt", "utf8"),
// ]);
// console.log(data1.length, data2.length)


// שאלות להגשה
// 1
// promise => not need callback, you can call it whenever you want.
// without promise => need callback that come to the queue emmidiatly when the assync is finished.

// 2
// with cb, if we want to use the result of the first cb to the next assync, we have to open the next assync inside the first cb, and if happends many time the code becomes nested and clumsy

// 3

// first: we can write it in one colomn so it is not nested, and we can see every operation when it begins and when it ends.
// second: we can turn on the resolve of the assync whenever we want, it does not happen automatically when the assync operation ends.

// 4
// if we don't write "return" in the end of the "then", the next "then" will run on "undefined".

