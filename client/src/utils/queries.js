import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  {
    allUsers {
      username
      firstname
      lastname
      email
      location
      age
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  {
    user {
      location
      age
      gender
      bio
      snapchat
      instagram
      phoneNumber
    }
  }
`;