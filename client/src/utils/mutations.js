import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser(
  $username: String
  $firstname: String
  $lastname: String
  $email: String
  $password: String
  $latitude: String
  $longitude: String
  $birthday: String
  $pronouns: String
  $bio: String
  $phoneNumber: String
  $timePref: String
  $goals: String
  $activities: String
) {
  updateUser(
    username: $username
    firstname: $firstname
    lastname: $lastname
    email: $email
    password: $password
    latitude: $latitude
    longitude: $longitude
    birthday: $birthday
    pronouns: $pronouns
    bio: $bio
    phoneNumber: $phoneNumber
    timePref: $timePref
    goals: $goals
    activities: $activities
  ) {
    user {
      _id
      username
    }
  }
}
`;