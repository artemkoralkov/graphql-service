const genresResolver = {
  Query: {
    genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.genresAPI.getGenre(id),

    genres: (_: any, __: any, { dataSources }: any) =>
      dataSources.genresAPI.getGenres(),
  },
  Mutation: {
    createGenre: (_: any, { newGenre }: any, { dataSources }: any) =>
      dataSources.genresAPI.createGenre(newGenre),
    updateGenre: (
      _: any,
      { id, updatedGenre }: { id: string; updatedGenre: any },
      { dataSources }: any
    ) => dataSources.genresAPI.updatedGenre(id, updatedGenre),
    deleteGenre: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.genresAPI.deleteGenre(id),
  },
  Genre: {
    id: (parent: any) => parent._id,
  },
};
export default genresResolver;
