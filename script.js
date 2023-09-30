'use strict';

const numberOfFilms = +prompt('How many movies you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('What the last movie you watched?', ''),
            b = prompt('How many points you give ?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('You watched so little films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are classic viewer');
} else if (personalMovieDB.count >= 30) {
    alert('You are crazy!');
} else {
    alert('ERROR');
}

console.log(personalMovieDB);

