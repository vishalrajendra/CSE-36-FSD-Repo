const express=require("express");
const {graphqlHTTP}=require("express-graphql");
const {buildSchema}=require("graphql");

const app =express();

//GraphQL Scheme

const schema=buildSchema(
    type Query {
        hello:String
        student:student
    }
)