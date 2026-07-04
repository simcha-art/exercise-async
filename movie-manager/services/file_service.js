import fs from "fs/promises";

export function readFile() {
    try{
        return fs.readFile("./data/movies.json", "utf8").then(data => JSON.parse(data))
    } catch(err) {
        console.error("failed reading file: ", err.message)
    }
    }

export function writeFile(moviesList) {
    try {
        fs.writeFile("./data/movies.json", JSON.stringify(moviesList, null, 2));
    } catch(err) {
        console.error("failed writing to file: ", err.message)
    }

}
