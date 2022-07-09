import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3006/v1/tracks";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getTrack(id: string) {
    return await this.get(`/${id}`);
  }

  async getTracks() {
    const response = await this.get("");
    return response.items;
  }

  async createTrack(newTrack: {
    title: string;
    albumIds?: string;
    bandsIds?: string[];
    duration?: number;
    released?: number;
    genresIds?: string[];
  }) {
    return await this.post("", newTrack);
  }

  async updateTrack(
    id: string,
    updatedTrack: {
      title?: string;
      albumId?: string;
      bandsIds?: string[];
      duration?: number;
      released?: number;
      genresIds?: string[];
    }
  ) {
    return await this.put(`/${id}`, updatedTrack);
  }

  async deleteTrack(id: string) {
    const response = await this.delete(`/${id}`);
    if (response.deletedCount) {
      return id;
    }
    return "No track with such id";
  }
}
