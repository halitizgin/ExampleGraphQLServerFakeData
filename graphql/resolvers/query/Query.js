const Query = {
    movie: (parent, { id }, { movies }) => movies.find(movie => movie.id === id),
    director: (parent, { id }, { directors }) => directors.find(director => director.id === id),
    allMovies: (parent, args, { movies }) => movies,
    allDirectors: (parent, args, { directors }) => directors,
}

module.exports = Query;