const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstname: String
    lastname: String
    email: String
    location: Int
    age: Int
    gender: String
    bio: String
    snapchat: String
    instagram: String
    phoneNumber: Int
    activities: [Activities]
  }
  type Activities {
    _id: ID
    strengthTraing: Boolean
    biking: Boolean
    running: Boolean
    swimming: Boolean
    basketball: Boolean
    soccer:  Boolean 
    tennis: Boolean
    rockClimbing: Boolean
    yoga: Boolean
    hiking: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    activities: [Activities]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateActivities(_id: ID!): Activities
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
