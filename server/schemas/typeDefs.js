// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Book {
    bookId: ID
    authors: String
    image: String
    link: String
    title: String
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    link: String
    title: String!
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
    addUser(username: String!, password: String!) : Auth
    saveBook(bookData: BookInput) : User
    removeBook(bookId: ID!) : User
  }
`;

// export the typeDefs
module.exports = typeDefs;