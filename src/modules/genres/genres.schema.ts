import { gql } from "apollo-server";

export default gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input CreateGenreInput {
    name: String!
    description: String
    country: String
    year: Int
  }

  type Query {
    genre(id: ID!): Genre
    genres(limits: Int, offset: Int): [Genre]
  }
  input UpdateGenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  type Mutation {
    createGenre(newGenre: CreateGenreInput!): Genre
    updateGenre(id: ID!, updatedGenre: UpdateGenreInput!): Genre
    deleteGenre(id: ID!): String
  }
`;
