import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    allUsers {
      username
      firstname
      lastname
      email
      location
      age
      }
    }
`;

export const QUERY_PROFILE = gql`
  query user {
    user {
      username
      firstname
      lastname
      location
      age
      gender
      bio
      snapchat
      instagram
      phoneNumber
      email
    }
  }
`;