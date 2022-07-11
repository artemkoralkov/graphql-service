import UsersAPI from "./modules/users/users.service";
import AlbumsAPI from "./modules/albums/albums.service";
import ArtistsAPI from "./modules/artists/artists.service";
import BandsAPI from "./modules/bands/bands.service";
import FavouritesAPI from "./modules/favourites/favourites.service";
import GenresAPI from "./modules/genres/genres.service";
import TracksAPI from "./modules/tracks/tracks.service";

const dataSources = {
  artistsAPI: new ArtistsAPI(),
  albumsAPI: new AlbumsAPI(),
  bandsAPI: new BandsAPI(),
  favouritesAPI: new FavouritesAPI(),
  genresAPI: new GenresAPI(),
  tracksAPI: new TracksAPI(),
  usersAPI: new UsersAPI(),
};
export default dataSources;
