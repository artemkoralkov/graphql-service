import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3005/v1/albums";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getAlbum(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async getAlbums() {
    const response = await this.get("");
    return response.items;
  }

  async createAlbum(newAlbum: {
    name: string;
    released?: number;
    artistsIds?: string[];
    bandsIds?: string[];
    tracksIds?: string[];
    genresIds?: string[];
    image?: string;
  }) {
    return await this.post("", newAlbum);
  }

  async updateAlbum(
    id: string,
    updatedAlbum: {
      name?: string;
      released?: number;
      artistsIds?: string[];
      bandsIds?: string[];
      tracksIds?: string[];
      genresIds?: string[];
      image?: string;
    }
  ) {
    const response = await this.put(`/${id}`, updatedAlbum);
    return response;
  }

  async deleteAlbum(id: string) {
    const response = await this.delete(`/${id}`);
    if (response.deletedCount) {
      return id;
    }
    return "No album with such id";
  }
}
