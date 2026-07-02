import fs from "fs/promises";

export function readFile() {
    return fs.readFile("./data/movies.json", "utf8").then(data => JSON.parse(data))
    }

export function writeFile(moviesList) {
    fs.writeFile("./data/movies.json", JSON.stringify(moviesList, null, 4))
}
