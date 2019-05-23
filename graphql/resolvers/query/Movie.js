const Movie = {
    director: (parent, args, { directors }) => directors.find(director => director.id === parent.directorId),
};

module.exports = Movie;