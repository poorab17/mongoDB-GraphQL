const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const uri = "mongodb://0.0.0.0:27017/";

const server = new ApolloServer({
    typeDefs,
    resolvers
})
const { url } = startStandaloneServer(server, {
    listen: { port: 5000 }
})

mongoose.connect(uri + "graphqlDb")
    .then(() => {
        console.log("mongoDb connected");
        // return server.listen({ port: 5000 });
    })
// .then((res) => {
//     console.log(`server is listening at port ${res.url}`);
// })




console.log('server listening at port 5000')