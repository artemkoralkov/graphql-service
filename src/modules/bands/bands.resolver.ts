import { Member } from "./classes/Member";

const bandsResolver = {
  Query: {
    band: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsAPI.getBand(id),

    bands: (_: any, __: any, { dataSources }: any) =>
      dataSources.bandsAPI.getBands(),
  },
  Mutation: {
    createBand: (_: any, { newBand }: any, { dataSources }: any) =>
      dataSources.bandsAPI.createBand(newBand),
    updateBand: (
      _: any,
      { id, updatedBand }: { id: string; updatedBand: any },
      { dataSources }: any
    ) => dataSources.bandsAPI.updateBand(id, updatedBand),
    deleteBand: (_: any, { id }: { id: string }, { dataSources }: any) =>
      dataSources.bandsAPI.deleteBand(id),
  },
  Band: {
    id: (parent: any) => parent._id,
    genres: (
      { genresIds }: { genresIds: string[] },
      _: any,
      { dataSources }: any
    ) =>
      genresIds.map(
        async (id: string) => await dataSources.genresAPI.getGenre(id)
      ),
    members: (
      { members }: { members: Member[] },
      _: any,
      { dataSources }: any
    ) =>
      members.map(async (member: Member) => {
        const artist = await dataSources.artistsAPI.getArtist(member.artist);
        return {
          id: artist._id,
          ...artist,
          years: member.years,
          instrument: member.instrument,
        };
      }),
  },
};
export default bandsResolver;
