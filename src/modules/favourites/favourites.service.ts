import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3007/v1/favourites";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getFavourites(id: string) {
    return await this.get("", { user: id });
  }

  async addArtistToFavourites(userId: string, artistId: string) {
    return await this.put("/add", {
      type: "artists",
      user: userId,
      id: artistId,
    });
  }

  async addBandToFavourites(userId: string, bandId: string) {
    return await this.put("/add", {
      type: "bands",
      user: userId,
      id: bandId,
    });
  }

  async addTrackToFavourites(userId: string, trackId: string) {
    return await this.put("/add", {
      type: "tracks",
      user: userId,
      id: trackId,
    });
  }

  async addGenreToFavourites(userId: string, genreId: string) {
    return await this.put("/add", {
      type: "genres",
      user: userId,
      id: genreId,
    });
  }

  async deleteArtistFromFavourites(userId: string, artistId: string) {
    return await this.put("/remove", {
      type: "artists",
      user: userId,
      id: artistId,
    });
  }

  async deleteBandFromFavourites(userId: string, bandId: string) {
    return await this.put("/remove", {
      type: "bands",
      user: userId,
      id: bandId,
    });
  }

  async deleteTrackFromFavourites(userId: string, trackId: string) {
    return await this.put("/remove", {
      type: "tracks",
      user: userId,
      id: trackId,
    });
  }

  async deleteGenreFromFavourites(userId: string, genreId: string) {
    return await this.put("/remove", {
      type: "genres",
      user: userId,
      id: genreId,
    });
  }
}
