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
    picture: [Picture]
    activities: [Activities]
  }
  type Activities {
    _id: ID
    strengthTraining: Boolean
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
    activities: [Activities]
    user: User
    allUsers: [User]
  }

  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    updateUser(username: String, firstname: String, lastname: String, email: String, password: String, latitude: String, longitude: String, birthday: String, pronouns: String, bio: String, phoneNumber: String): User
    updateActivities(_id: ID!): Activities
    login(email: String!, password: String!): Auth
   
  }
`;

module.exports = typeDefs;
