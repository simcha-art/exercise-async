import { readFile, writeFile } from "./file_service.js";

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

export function showAllMovies() {
    return allMovies.map((movie) => {
        return { id: movie.id, title: movie.title };
    });
}

export function showMovieById(id) {
    return allMovies.find((movie) => movie.id === id);
}

export function createMovie(name, genre, year, rate) {
    const id = getId();
    const newMovie = { id, name, genre, year, rate };
    allMovies.push(newMovie);
    writeFile(allMovies);
    return showMovieById(id);
}

export function deleteMovie(id) {
    const index = allMovies.findIndex((movie) => movie.id === id);
    if (index < 0) return;
    allMovies.splice(index, 1);
    writeFile(allMovies);
}

export function updateRate(id, rate) {
    const movie = allMovies.find((movie) => movie.id === id);
    if (movie) {
        movie.rate = rate;
        writeFile(allMovies);
    }
}

export function searchByName(name) {
    return allMovies.filter((movie) => movie.name.toLowerCase() === name.toLowerCase());
}

export function sortByGenre (genre) {
    return allMovies.filter((movie) =>  movie.genre.toLowerCase() === genre.toLowerCase())
}

export function showStatistics () {
    const number = allMovies.length
    let avgRate = allMovies.reduce((acc, current) => acc + current.rate, 0) / number
    avgRate = Math.round(avgRate * 100) / 100
    const maxRate = Math.max(...allMovies.map((movie) => movie.rate))
    return {number, avgRate, maxRate}
}


