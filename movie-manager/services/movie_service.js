import { readFile, writeFile } from "./file_service.js";


async function createMovieManager () {

    const allMovies = await readFile();

    function generateId() {
        let startId;
        if (allMovies.length === 0) {
            startId = 1;
        } else {
            startId = Math.max(...allMovies.map((movie) => movie.id)) + 1;
        }
        return () => startId++;
    }

    const getId = generateId();

    function showAllMovies() {
        return allMovies.map((movie) => {
            return { id: movie.id, title: movie.name };
        });
    }

    function showMovieById(id) {
        return allMovies.find((movie) => movie.id === id);
    }

    function createMovie(name, genre, year, rate) {
        const id = getId();
        const newMovie = { id, name, genre, year, rate };
        allMovies.push(newMovie);
        writeFile(allMovies);
        return showMovieById(id);
    }

    function deleteMovie(id) {
        const index = allMovies.findIndex((movie) => movie.id === id);
        if (index < 0) return;
        allMovies.splice(index, 1);
        writeFile(allMovies);
    }

    function updateRate(id, rate) {
        const movie = allMovies.find((movie) => movie.id === id);
        if (movie) {
            movie.rate = rate;
            writeFile(allMovies);
        }
    }

    function searchByName(name) {
        return allMovies.filter((movie) => movie.name.toLowerCase() === name.toLowerCase());
    }

    function sortByGenre (genre) {
        return allMovies.filter((movie) =>  movie.genre.toLowerCase() === genre.toLowerCase())
    }

    function showStatistics () {
        const number = allMovies.length
        let avgRate = allMovies.reduce((acc, current) => acc + current.rate, 0) / number
        avgRate = Math.round(avgRate * 100) / 100
        const maxRate = Math.max(...allMovies.map((movie) => movie.rate))
        return {number, avgRate, maxRate}
    }

    return {showAllMovies, showMovieById, showStatistics, createMovie, updateRate, deleteMovie, searchByName, sortByGenre}
}

const movieManager =  await createMovieManager()

export default (movieManager)