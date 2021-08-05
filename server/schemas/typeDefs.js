const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    password: String
    latitude: String
    longitude: String
    birthday: String
    pronouns: String
    bio: String
    phoneNumber: String
    timePref: String
    goals: String
    activities: String
    
  }
  type Picture {
    name: String
    desc: String
    img: String
  }
 
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    allUsers: [User]
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    updateUser(username: String, firstname: String, lastname: String, email: String, password: String, latitude: String, longitude: String, birthday: String, pronouns: String, bio: String, phoneNumber: String, timePref: String, goals: String, activities: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
