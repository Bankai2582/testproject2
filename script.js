'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
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
}
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    alert('You watched so little films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('You are classic viewer');
} else if (personalMovieDB.count >= 30) {
    alert('You are crazy!');
} else {
    alert('ERROR');
}

}
// detectPersonalLevel();



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGengers() {
    for (let i = 1; i <= 3 ; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genres ${i}`);
    }
}
writeYourGengers();

