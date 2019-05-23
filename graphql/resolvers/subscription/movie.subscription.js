module.exports = {
    movieAdded: {
        subscribe: (parent, args, { pubsub }) => {
            return pubsub.asyncIterator('movieAdded');
        }
    }
}