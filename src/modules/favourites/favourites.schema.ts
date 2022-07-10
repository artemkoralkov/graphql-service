import { gql } from "apollo-server";

export default gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favourites(id: ID!): Favourites!
  }
  type Mutation {
    addTrackToFavourites(userId: ID!, trackId: ID!): Favourites
    addBandToFavourites(userId: ID!, bandId: ID!): Favourites
    addArtistToFavourites(userId: ID!, artistId: ID!): Favourites
    addGenreToFavourites(userId: ID!, genreId: ID!): Favourites
  }
`;
