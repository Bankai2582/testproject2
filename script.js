let numberOfFilms = +prompt('How many movies you watched?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let answer = prompt('What the last movie you watched?', '');
let answer2 = prompt('How many points you give ?', '');
let answer3 = prompt('What the last movie you watched?', '');
let answer4 = prompt('How many points you give ?', '');

personalMovieDB.movies[answer] = answer2;
personalMovieDB.movies[answer3] = answer4;

console.log(personalMovieDB);