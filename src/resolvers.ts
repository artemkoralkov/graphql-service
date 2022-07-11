import usersResolver from "./modules/users/users.resolver";
import artistResolver from "./modules/artists/artists.resolver";
import albumsResolver from "./modules/albums/albums.resolver";
import bandsResolver from "./modules/bands/bands.resolver";
import tracksResolver from "./modules/tracks/tracks.resolver";
import genresResolver from "./modules/genres/genres.resolver";
import favouritesResolver from "./modules/favourites/favourites.resolver";
const resolvers = [
  artistResolver,
  usersResolver,
  albumsResolver,
  bandsResolver,
  tracksResolver,
  genresResolver,
  favouritesResolver,
];
export default resolvers;
