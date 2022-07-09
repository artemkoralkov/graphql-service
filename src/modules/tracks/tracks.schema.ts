import { gql } from "apollo-server";

export default gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  input CreateTrackInput {
    title: String!
    albumId: String
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  input UpdateTrackInput {
    title: String
    albumId: String
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type Query {
    track(id: ID!): Track
    tracks: [Track]!
  }

  type Mutation {
    createTrack(newTrack: CreateTrackInput!): Track
    updateTrack(id: ID!, updatedTrack: UpdateTrackInput!): Track
    deleteTrack(id: ID!): String
  }
`;
