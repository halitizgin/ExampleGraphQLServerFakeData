const http = require('http');
const { ApolloServer, PubSub } = require('apollo-server-express');
const express = require('express');
const {importSchema} = require('graphql-import');
const resolvers = require("./graphql/resolvers");
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

mongoose.connect("mongodb://localhost:27017/cafe")
    .then(() => console.log("Connected to mongodb server."))
    .catch(e => console.log(e));

const pubsub = new PubSub();
const { movies, directors } = require('./data');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'), 
    resolvers: {
        ...resolvers
    },
    context: {
        movies,
        directors,
        pubsub
    },
    introspection: true,
    playground: true
});

server.applyMiddleware({app})

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

// ⚠️ Pay attention to the fact that we are calling `listen` on the http server variable, and not on `app`.
httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})