const { constants } = require("buffer");
const { log } = require("console");
const fs = require("fs");

// 1
// fs.writeFile("data/message.txt", "Hello from node fs!\n", (err) => {
//     if (err) return console.log(err);
//     console.log("File was created successfully");
// })

// 2

// fs.readFile("data/message.txt", "utf-8", (err, data) =>{
//     if (err) return console.log(err);
//     console.log(data)
// })

// 3

// console.log("start")

// fs.readFile("data/message.txt", "utf8", (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
// })

// console.log("end")

// 4

// fs.readFile("data/not-exist.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Could not read file");
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

// 5

// const readTextFile = function(filePath, callback) {
//     fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) return callback(err);
//         callback(null, data);
//     }
// )
// }

// readTextFile('data/message.txt', function (err, content) {
//   if (err) {
//     console.log('Error:', err);
//     return;
//   }

//   console.log(content);
// });

// 6

// fs.appendFile("data/message.txt", "this line was added later\n", (err) => {
//     if (err) return console.log(err);
//     fs.readFile("data/message.txt", "utf8", (err, data) => {
//         if (err) return console.log(err);
//         console.log(data);
//     })
// } )

// 7

// fs.writeFile("data/log.txt", "Log started\n", (err) => {
//     if (err) return console.log(err);
//     fs.appendFile("data/log.txt", "First action completed\n", (err) => {
//         if (err) return console.log(err);
//         fs.appendFile("data/log.txt", "Second action completed\n", (err) => {
//             if (err) return console.log(err);
//             fs.readFile("data/log.txt", "utf8", (err, data) => {
//                 if (err) return console.log(err);
//                 console.log(data);
//             })
//     })
//     })
// })

// 8

// fs.mkdir("data/users", {recursive: true}, (err, path) => {
//     if (err) return console.log(err);
//     if (path) {
//         console.log("Users folder created")
//     } else {
//         console.log("Users folder was already exist")
//     }
//     })

// 9

// fs.mkdir("data/users", {recursive: true}, (err) => {
//     if (err) return console.log(err);
//     fs.writeFile("data/users/user1.txt", "Name: David\nAge: 25", (err) => {
//         if (err) {
//             return console.log(err)
//         }
//     })
// })

// 10

// fs.readdir("data", (err, files) => {
//     if (err) return console.log(err);
//     console.log(files)
// })

// 11

// fs.writeFile("data/step1.txt", "step 1 completed\n", (err) => {
//     if (err) return console.log(err);
//     fs.writeFile("data/step2.txt", "step 2 completed\n", (err) => {
//         if (err) return console.log(err);
//         fs.writeFile("data/step3.txt", "step 3 completed\n", (err) => {
//             if (err) return console.log(err);
//             console.log("All steps completed");

//         })
//     })
// })

// 12

// fs.readFile("data/step1.txt", "utf8", (err, data1) => {
//     if (err) return console.log(err);
//     fs.readFile("data/step2.txt", "utf8", (err, data2) => {
//         if (err) return console.log(err);
//         fs.readFile("data/step3.txt", "utf8", (err, data3) => {
//             if (err) return console.log(err);
//             console.log(data1);
//             console.log(data2);
//             console.log(data3);
//         });
//     });
// });


// 13

// const titlePath = "data/report-title.txt"
// const titleContent = "Daily Report\n"

// const bodyPath = "data/report-body.txt"
// const bodyContent = "Everything is working\n"

// const finalPath = "data/final-report.txt"

// fs.writeFile(titlePath, titleContent, (err) => {
//     if (err) return console.log(err);
//     fs.writeFile(bodyPath, bodyContent, (err) => {
//         if (err) return console.log(err);
//         fs.readFile(titlePath, "utf8", (err, title) => {
//             if (err) return console.log(err);
//             fs.readFile(bodyPath, "utf8", (err, body) => {
//                 if (err) return console.log(err);
//                 const msg = title + body;
//                 fs.writeFile(finalPath, msg, (err) => {
//                     if (err) return console.log(err);
//                 })
                
//             })
            
//         })
        
//     })
    
// })

// const src = "data/original.txt"
// const srcContent = "Original file content"

// const dest = "data/copy.txt"

// fs.writeFile(src, srcContent, (err) => {
//     if (err) return console.log(err);
//     fs.readFile(src, "utf8", (err, data) => {
//         if (err) return console.log(err);
//         fs.writeFile(dest, data, (err) => {
//             if (err) console.log(err);
//             fs.readFile(dest, "utf8", (err, data) => {
//                 if (err) return console.log(err);
//                 console.log(data);
//             })
            
//         })
        
//     })
    
// })