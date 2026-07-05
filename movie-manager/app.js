import { valid } from "./utils/validator.js"
import movieManager from "./services/movie_service.js"
import input from "analiza-sync"

const showMenu = () => {
    const menu = `
============================== 
Movie Collection Manager 
============================== 
 
1. Show all movies 
2. Show by id 
3  Create new movie 
4. Delete movie 
5. Update rate 
6  Search by name 
7. Sort by genre 
8. Show statistics 
9. Exit  
`
    console.log(menu)
}

const validNumberInput = (start, end) => {
    let choice;
    const valid = (choice) => Boolean(choice) && choice >= start && choice <= end;
    while (!valid(choice))
        choice = Number(input(`Enter your choice (${start} - ${end}): `))
        if (!valid(choice)) {
            console.error(`Error!, Only numbers from ${start} to ${end} are valid`)
        }
    return choice
}

const validIdInput = () => {
    let id;
    while (!id) {
        id = Number(input("Enter id: "))
        if (!id) {
            console.log("id must by a number!")
        }
    }
    return id
}

const getInputName = () => {
    let name = "";
    while (!valid.name(name)) {
        name = input("Enter name: ")
        }
    return name
}

const getInputRate = () => {
    let rate = 11;
    while (!(valid.rate(rate))) {
        rate = Number(input("Enter rate (1-10): "))
        if (!valid.rate(rate)) {
            console.log("rate must be between 0 and 10")
        }
    }
    return rate
}

const getInputYear = () => {
    let year = 0;
    while (!valid.year(year)) {
        year = Number(input("Enter year: "))
        if (!valid.year(year)) {
            console.log("Year must be between 1900 and current year")
        }
    }
    return year
}

async function main() {
    let exit;
    while (!exit){
        showMenu()
        let id;
        const choice = validNumberInput(1, 9)
        switch (choice) {
            case 1:
                movieManager.showAllMovies().forEach(movie => console.log(`${movie.id}.${movie.title}`))
                break;
            case 2:
                id = validIdInput()
                const movie = movieManager.showMovieById(id)
                if (movie) console.log(movie);
                else console.log(`movie ${id} not found`)
                break;
            case 3:
                const name = getInputName()
                const year = getInputYear()
                const rate = getInputRate()
                const genre = input("Enter genre: ")
                const newMovie = await movieManager.createMovie(name,genre, year, rate)
                console.log("New movie added:\n", newMovie)
                break;
            
            case 4:
                id = validIdInput()
                await movieManager.deleteMovie(id)
                console.log(`movie ${id} deleted successfully`)
                break;
            
            case 5:
                id = validIdInput()
                const newRate = getInputRate()
                await movieManager.updateRate(id, newRate)
                console.log(`Rate of movie ${id} updated successfully`)
                break;

            case 6:
                const nameToSearch = getInputName()
                console.table(movieManager.searchByName(nameToSearch))
                break;

            case 7:
                const genreToSearch = input("Enter genre: ")
                console.table(movieManager.sortByGenre(genreToSearch))
                break;

            case 8:
                console.log(movieManager.showStatistics())
                break

            case 9:
                exit = true

            default:
                continue
        }
    }
}

main()