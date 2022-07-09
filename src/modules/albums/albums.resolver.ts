const albumsResolver = {
  Query: {
    album: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albumsAPI.getAlbum(id),

    albums: (_: any, __: any, { dataSources }: any) =>
      dataSources.albumsAPI.getAlbums(),
  },
  Mutation: {
    createAlbum: (_: any, { newAlbum }: any, { dataSources }: any) =>
      dataSources.albumsAPI.createAlbum(newAlbum),
    updateAlbum: (
      _: any,
      { id, updatedAlbum }: { id: string; updatedAlbum: any },
      { dataSources }: any
    ) => dataSources.albumsAPI.updateAlbum(id, updatedAlbum),
    deleteAlbum: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.albumsAPI.deleteAlbum(id),
  },
  Album: {
    id: (parent: any) => parent._id,
    bands: (
      { bandsIds }: { bandsIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      bandsIds.map(
        async (id: string) => await dataSources.bandsAPI.getBand(id)
      ),
    genres: (
      { genresIds }: { genresIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      genresIds.map(
        async (id: string) => await dataSources.genresAPI.getGenre(id)
      ),
    tracks: (
      { tracksIds }: { tracksIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      tracksIds.map(
        async (id: string) => await dataSources.tracksAPI.getTrack(id)
      ),
    artists: (
      { artistsIds }: { artistsIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      artistsIds.map(
        async (id: string) => await dataSources.artistsAPI.getArtist(id)
      ),
  },
};
export default albumsResolver;
