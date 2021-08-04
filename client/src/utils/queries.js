import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    allUsers {
      username
      firstname
      lastname
      email
      birthday
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
      activities {
        strengthTraining
        biking
        running
        swimming
        basketball
        soccer 
        tennis
        rockClimbing
        yoga
        hiking
        }
    }
  }
`;