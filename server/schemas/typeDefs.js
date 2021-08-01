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
  type Geolocations {
    userId: ID
    address: String
    point: String
    formatedAddress: String
    zipcode: Int
    city: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    activities: [Activities]
    user: User
    allUsers: [User]
    geolocation: [Geolocations]
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!, location: Int!): Auth
    updateUser(firstname: String, lastname: String, email: String, password: String): User
    updateActivities(_id: ID!): Activities
    login(email: String!, password: String!): Auth
   
  }
`;

module.exports = typeDefs;
