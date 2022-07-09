const artistsResolver = {
  Query: {
    artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsAPI.getArtist(id),

    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistsAPI.getArtists(),
  },
  Mutation: {
    createArtist: (_: any, { newArtist }: any, { dataSources }: any) =>
      dataSources.artistsAPI.createArtist(newArtist),
    updateArtist: (
      _: any,
      { id, updatedArtist }: { id: string; updatedArtist: any },
      { dataSources }: any
    ) => dataSources.artistsAPI.updateArtist(id, updatedArtist),
    deleteArtist: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.artistsAPI.deleteArtist(id),
  },
  Artist: {
    id: (parent: any) => parent._id,
    bands: async (parent: any, __: any, { dataSources }: any) => {
      return await parent.bandsIds.map(
        async (id: string) => await dataSources.bandsAPI.getBand(id)
      );
    },
  },
};
export default artistsResolver;
