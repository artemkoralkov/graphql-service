# GraphQL-Service

## Getting Started

1. Before starting clone and install [repository with microservices](https://github.com/rolling-scopes-school/node-graphql-service)
2. Clone repository
3. Switch to branch `develop`
4. run `npm install` in project folder
5. run one of command npm run start:prod` or `npm run start:dev`
6. Go to  [localhost:4000](http://localhost:4000/) and try quires and mutations.

## Commands

- `npm run start:prod` - build and run project
- `npm run start:dev` - run project in development mode via `nodemon`

## Types
```graphql
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

```
```graphql
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

```
```graphql
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

```
```graphql
type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}
```
```graphql
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
```
```graphql
type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
}
```
```graphql
type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}
```

## Queries
- `artist` get artist by  id.
- `artists` get all artists.
- `genre` get genre by id.
- `genres` get all genres.
- `track` get track by id.
- `tracks` get all tracks.
- `band` get band by id.
- `bands` get all bands.
- `album` get album by id.
- `albums` get all albums.
- `jwt` get jwt by users email and password.
- `user` get user by id.
- `favourites` get favourites by id.

Queries `artists`, `genres`, `tracks`, `bands` and `albums` has pagination parametrs limit and offset.

## Mutations
- `createArtist` create artist.
- `deleteArtist` delete artist by id.
- `updateArtist` update artist by id.
- `createGenre` create genre.
- `deleteGenre` delete genre by id.
- `updateGenre` update genre by id.
- `createBand` create band.
- `deleteBand` delete band by id.
- `updateBand` update band by id.
- `createTrack` create track.
- `deleteTrack` delete track by id.
- `updateTrack` update track by id.
- `createAlbum` create album.
- `deleteAlbum` delete album by id.
- `updateAlbum` update album by id.
- `registerUser` register user.
- `addTrackToFavourites` add track to favourites.
- `addBandToFavourites` add band to favourites.
- `addArtistToFavourites` add artist to favourites.
- `addGenreToFavourites` add genre to  favourites.
- `deleteTrackFromFavourites` delete track from favourites.
- `deleteBandFromFavourites` delete band from favourites. 
- `deleteArtistFromFavourites` delete artist from favourites.
- `deleteGenreFromFavourites` delete genre from favourites.