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
    $location: Int!
    $age: String
    $gender: String
    $bio: String
    $snapchat: String
    $instagram: String
    $phoneNumber: String
  ) {
    addUser(
      username: $username
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      location: $location
      age: $age
      gender: $gender
      bio: $bio
      snapchat: $snapchat
      instagram: $instagram
      phoneNumber: $phoneNumber
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
  $location: Int
  $age: String
  $gender: String
  $bio: String
  $snapchat: String
  $instagram: String
  $phoneNumber: String
) {
  updateUser(
    username: $username
    firstname: $firstname
    lastname: $lastname
    email: $email
    password: $password
    location: $location
    age: $age
    gender: $gender
    bio: $bio
    snapchat: $snapchat
    instagram: $instagram
    phoneNumber: $phoneNumber
  ) {
    user {
      _id
      username
    }
  }
}
`;