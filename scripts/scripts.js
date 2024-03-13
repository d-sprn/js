'use strict';

const numberOfFilms = +prompt('How many films did you seen?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last movie'),
    b = prompt('Rate last movie'),
    c = prompt('Last movie'),
    d = prompt('Rate the movie');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)