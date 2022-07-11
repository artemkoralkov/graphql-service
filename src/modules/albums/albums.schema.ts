import { gql } from "apollo-server";

export default gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input CreateAlbumInput {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    tracksIds: [String]
    genresIds: [String]
    image: String
  }
  input UpdateAlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    tracksIds: [String]
    genresIds: [String]
    image: String
  }

  type Mutation {
    createAlbum(newAlbum: CreateAlbumInput!): Album!
    updateAlbum(id: ID!, updatedAlbum: UpdateAlbumInput!): Album!
    deleteAlbum(id: ID!): ID
  }

  type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int): [Album]
  }
`;
