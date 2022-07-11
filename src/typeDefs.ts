import { gql } from "apollo-server";
import Artist from "./modules/artists/artists.schema";
import Album from "./modules/albums/albums.schema";
import Band from "./modules/bands/bands.schema";
import Favourites from "./modules/favourites/favourites.schema";
import Genre from "./modules/genres/genres.schema";
import Track from "./modules/tracks/tracks.schema";
import User from "./modules/users/users.schema";

export default gql`
  ${Artist}
  ${Album}
  ${Band}
  ${Favourites}
  ${Genre}
  ${Track}
  ${User}
`;
