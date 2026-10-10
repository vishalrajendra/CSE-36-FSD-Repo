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

// data
const studentdata={
    id:"101",
    name:"sumit",
    course:"B.Tech CSE",
    age: 20
};

// resolve function
const root={
    hello: () => {
        return "hello from graphql";
    },
    student: () => {
        return studentdata;
    }
};

// graphql endpoint
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);


// start server
app.listen(3000,()=>{
    console.log("server running at http://localhost:3000/graphql");
});