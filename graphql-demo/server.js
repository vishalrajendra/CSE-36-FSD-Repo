const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    hello: String
    student: Student
  }

  type Student {
    id: ID
    name: String
    course: String
    age: Int
  }
`);

//DATA
const studentData = {
    id : "101",
    name : "Rahul",
    course : "B.tech CSE",
    age : 20
};

//Resolver Functions
const root = {
    hello: () => {
        return "Hello From GraphQl !"
    },
    student: () => {
        return studentData;
    }
};

//Graphql endpoint

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue : root,
        graphiql : true
    })
);

//start server

app.listen(3000,() => {
    console.log("Server running at http://localhost:3000/graphql");
});