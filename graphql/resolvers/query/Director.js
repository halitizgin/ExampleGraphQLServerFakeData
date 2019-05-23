const Director = {
    movies: (parent, args, { movies }) => movies.filter(movie => movie.directorId === parent.id)
};

module.exports = Director;