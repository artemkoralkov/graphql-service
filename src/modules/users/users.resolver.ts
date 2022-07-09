const usersResolver = {
  Query: {
    user: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.usersAPI.getUser(id),
    jwt: (
      _: any,
      {
        firstName,
        secondName,
        password,
        email,
      }: {
        firstName: string;
        secondName: string;
        password: string;
        email: string;
      },
      { dataSources, token }: any
    ) => {
      const jwt = dataSources.usersAPI.getJWT(
        firstName,
        secondName,
        password,
        email
      );
      token = jwt;
      return jwt;
    },
  },
  Mutation: {
    registerUser: (_: any, { newUser }: any, { dataSources }: any) =>
      dataSources.usersAPI.registerUser(newUser),
  },
  User: {
    id: (parent: any) => parent._id,
  },
};
export default usersResolver;
