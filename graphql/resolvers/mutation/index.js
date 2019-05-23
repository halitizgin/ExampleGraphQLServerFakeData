const movie = require('./movie.mutation');
const director = require('./director.mutation');

const Mutation = {
    ...movie,
    ...director
}

module.exports = Mutation;