import { gql } from "apollo-server";

export default gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    id: ID
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    instrument: String
    instruments: [String]
    years: [String]
  }

  input MemberInput {
    artist: ID!
    instrument: String
    years: [String]
  }

  input CreateBandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  input UpdateBandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  type Query {
    band(id: ID!): Band
    bands(limit: Int, offset: Int): [Band]
  }

  type Mutation {
    createBand(newBand: CreateBandInput!): Band
    updateBand(id: ID!, updatedBand: UpdateBandInput!): Band
    deleteBand(id: ID!): ID
  }
`;
