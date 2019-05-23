module.exports = {
    addMovie: (parent, { name, year, directorId, imdb, subject }, { movies, directors, pubsub }) => {
        const director = directors.find(director => director.id === directorId);
        if (!director){
            throw new Error("Bu id numarasında bir yönetmen bulunmamaktadır.");
        }
        const id = (Math.random() * 10).toString(16);
        const movie = {
            id,
            name,
            year,
            directorId,
            imdb,
            subject
        };
        movies.push(movie);
        pubsub.publish('movieAdded', {
            movieAdded: movie
        });
        return movie;
    }
}