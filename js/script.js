const numberOfFilms = +prompt('Cколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просиотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просиотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

personalMoviesDB.movies [a] = b;
personalMoviesDB.movies [c] = d;

console.log(personalMoviesDB);
    