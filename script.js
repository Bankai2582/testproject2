'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies you watched?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many movies you watched?', '');
    }},

    rememberMyFilms: function() {
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
    }},

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        alert('You watched so little films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('You are crazy!');
    } else {
        alert('ERROR');
    }},

    showMyDB: function(hidden) {
        if (!hidden) {
        console.log(personalMovieDB);
    }},

    writeYourGengres: function() {
        for (let i = 1; i < 2 ; i++) {
            // let genre = prompt(`Your favorite genres ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('You write not corrent data');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] =  genre;
            // }

            let genres = prompt(`Your favorite genres`).toLowerCase();
            if (genres == '' || genres == null) {
                    console.log('You write not corrent data');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }

    } personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    })
},

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }


};