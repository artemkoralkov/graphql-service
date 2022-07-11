import { gql } from "apollo-server";

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type Query {
    user(id: ID!): User!
    jwt(password: String!, email: String!): JWT
  }

  type JWT {
    jwt: String!
  }
  input CreateUserInput {
    firstName: String
    lastName: String
    password: String!
    email: String!
  }
  type Mutation {
    registerUser(newUser: CreateUserInput!): User!
  }
`;
