module.exports = {
    addDirector: (parent, { name, birth }, { directors }) => {
        const id = (Math.random() * 10).toString(16);
        const director = { id, name, birth };
        directors.push(director);
        return director;
    }
}