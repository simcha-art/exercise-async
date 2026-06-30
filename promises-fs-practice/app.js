const fs = require("fs");
const path = require("path");

// 1
function writeFileAsPromise(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

const messagePath = path.join("data", "message.txt");
const messageContent = "Hello world";

// const newFile = writeFileAsPromise(messagePath, messageContent)

// 2

function readFileAsPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// readFileAsPromise(messagePath).then((data) => console.log(data))

function readFileAndCount(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.length);
            }
        });
    });
}

// const counter = readFileAndCount(messagePath)

// counter
// .then(console.log)

// 4

function appendFileAsPromise(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

const step1Path = path.join("data", "step1.txt");
const step2Path = path.join("data", "step2.txt");
const step3Path = path.join("data", "step3.txt");

// appendFileAsPromise(step1Path, "Step 1 done")
// .then(() => {
//     console.log("Step 1 done")
//     return appendFileAsPromise(step2Path, "Step 2 done")})
// .then(() => console.log("Step 2 done"))

// 5
// Promise.all([
//     readFileAsPromise(step1Path),
//     readFileAsPromise(step2Path),
//     readFileAsPromise(step3Path)
// ])
// .then(([data1, data2, data3]) => console.table([data1, data2, data3]))
// .catch(console.error)

// 6

const reportTitlePath = path.join("data", "report-title.txt")
const reportTitleContent = "Daily Report\n"

const reportBodyPath = path.join("data", "report-body.txt")
const reportBodyContent = "Everything is working\n"

const reportFinalPath = path.join("data", "final-report.txt")

Promise.resolve()
.then(() => writeFileAsPromise(reportTitlePath, reportTitleContent))
.then(() => writeFileAsPromise(reportBodyPath, reportBodyContent))
.then(() => readFileAsPromise(reportTitlePath))
.then(() => Promise.all([readFileAsPromise(reportTitlePath), readFileAsPromise(reportBodyPath)]))
.then(([title, body]) => writeFileAsPromise(reportFinalPath, title + body))
.catch(console.error)
