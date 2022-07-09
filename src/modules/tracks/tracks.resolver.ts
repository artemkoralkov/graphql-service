const tracksResolver = {
  Query: {
    track: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksAPI.getTrack(id),

    tracks: (_: any, __: any, { dataSources }: any) =>
      dataSources.tracksAPI.getTracks(),
  },
  Mutation: {
    createTrack: (_: any, { newTrack }: any, { dataSources }: any) =>
      dataSources.tracksAPI.createTrack(newTrack),
    updateTrack: (
      _: any,
      { id, updatedTrack }: { id: string; updatedTrack: any },
      { dataSources }: any
    ) => dataSources.tracksAPI.updateTrack(id, updatedTrack),
    deleteTrack: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.tracksAPI.deleteTrack(id),
  },
  Track: {
    id: (parent: any) => parent._id,
    album: ({ albumId }: { albumId: string[] }, _: any, { dataSources }: any) =>
      dataSources.albumsAPI.getAlbum(albumId),
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
  },
};
export default tracksResolver;
