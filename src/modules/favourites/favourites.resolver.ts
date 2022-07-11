const favouritesResolver = {
  Query: {
    favourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
      const res = dataSources.favouritesAPI.getFavourites(id);
      return res;
    },
  },
  Mutation: {
    addArtistToFavourites: (
      _: any,
      { userId, artistId }: { userId: string; artistId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.addArtistToFavourites(userId, artistId),

    addBandToFavourites: (
      _: any,
      { userId, bandId }: { userId: string; bandId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.addBandToFavourites(userId, bandId),

    addTrackToFavourites: (
      _: any,
      { userId, trackId }: { userId: string; trackId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.addTrackToFavourites(userId, trackId),

    addGenreToFavourites: (
      _: any,
      { userId, genreId }: { userId: string; genreId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.addGenreToFavourites(userId, genreId),

    deleteArtistFromFavourites: (
      _: any,
      { userId, artistId }: { userId: string; artistId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.deleteArtistFromFavourites(userId, artistId),

    deleteBandFromFavourites: (
      _: any,
      { userId, bandId }: { userId: string; bandId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.deleteBandFromFavourites(userId, bandId),

    deleteTrackFromFavourites: (
      _: any,
      { userId, trackId }: { userId: string; trackId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.deleteTrackFromFavourites(userId, trackId),

    deleteGenreFromFavourites: (
      _: any,
      { userId, genreId }: { userId: string; genreId: string },
      { dataSources }: any
    ) => dataSources.favouritesAPI.deleteGenreFromFavourites(userId, genreId),
  },
  Favourites: {
    id: (parent: any) => parent._id,
    userId: ({ userId }: { userId: string }) => userId,
    genres: (
      { genresIds }: { genresIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      genresIds.map(
        async (id: string) => await dataSources.genresAPI.getGenre(id)
      ),
    artists: (
      { artistsIds }: { artistsIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      artistsIds.map(
        async (id: string) => await dataSources.artistsAPI.getArtist(id)
      ),
    tracks: (
      { tracksIds }: { tracksIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      tracksIds.map(
        async (id: string) => await dataSources.tracksAPI.getTrack(id)
      ),
    bands: async (parent: any, __: any, { dataSources }: any) => {
      return await parent.bandsIds.map(
        async (id: string) => await dataSources.bandsAPI.getBand(id)
      );
    },
  },
};
export default favouritesResolver;
