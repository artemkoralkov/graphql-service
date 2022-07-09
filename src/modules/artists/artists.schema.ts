import { gql } from "apollo-server";

export default gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Query {
    artist(id: ID!): Artist
    artists: [Artist]
  }
  input CreateArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bandsIds: [String]
    instruments: [String]
  }

  input UpdateArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }
  type Mutation {
    createArtist(newArtist: CreateArtistInput!): Artist
    updateArtist(id: ID!, updatedArtist: UpdateArtistInput!): Artist
    deleteArtist(id: ID!): String
  }
`;
