import fs from "fs/promises";

export function readFile() {
    try{
        return fs.readFile("./data/movies.json", "utf8").then(data => JSON.parse(data))
    } catch(err) {
        console.error("failed reading file: ", err.message)
    }
    }

export async function writeFile(moviesList) {
    try {
        await fs.writeFile("./data/movies.json", JSON.stringify(moviesList, null, 2)).then(() => console.log("file written successfully"));
    } catch(err) {
        console.error("failed writing to file: ", err.message)
    }

}
