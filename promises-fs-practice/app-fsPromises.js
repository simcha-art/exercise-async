// 7

const fs = require("fs").promises;
const { readFile, cpSync } = require("fs");
const path = require("path")

fs.readFile("data/step1.txt", "utf-8")
.then(console.log)
.catch(console.error)




// 8

const pathTitle = path.join("data", "report-title.txt")
const pathBody = path.join("data", "report-body.txt")
const pathFinal = path.join("data", "final-report.txt")


const titleContent = "Daily Report\n"
const bodyContent = "Everything is working\n"

Promise.resolve()
.then(fs.writeFile(pathTitle, titleContent))
.then(() => fs.writeFile(pathBody, bodyContent))
.then(() => Promise.all([fs.readFile(pathTitle), fs.readFile(pathBody)]))
.then(([title, body]) => fs.writeFile(pathFinal, title + body))
.catch(console.error)