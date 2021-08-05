import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    allUsers {
      _id
      username
      firstname
      lastname
      birthday
      pronouns
      bio
      activities
      email
      }
    }
`;

export const QUERY_PROFILE = gql`
  query user {
    user {
      username
      firstname
      lastname
      email
      birthday
      pronouns
      bio
      phoneNumber
      timePref
      goals
      activities
    }
  }
`;

