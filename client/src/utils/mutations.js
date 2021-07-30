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
  ) {
    addUser(
      username: $username
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      location: $location
    ) {
      token
      user {
        _id
      }
    }
  }
`;
