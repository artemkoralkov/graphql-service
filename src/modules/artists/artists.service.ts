import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3002/v1/artists";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getArtist(id: string) {
    return await this.get(`/${id}`);
  }

  async getArtists(limit: number = 0, offset: number = 0) {
    const response = await this.get("", { limit, offset });
    return response.items;
  }

  async createArtist(newArtist: {
    firstName: string;
    secondName: string;
    middleName?: string;
    birthDate?: string;
    birthPlace?: string;
    country: string;
    bandsIds?: string[];
    instruments?: string[];
  }) {
    return await this.post("", newArtist);
  }

  async updateArtist(
    id: string,
    updatedArtist: {
      firstName?: string;
      secondName?: string;
      middleName?: string;
      birthDate?: string;
      birthPlace?: string;
      country?: string;
      bandsIds?: string[];
      instruments?: string[];
    }
  ) {
    return await this.put(`/${id}`, updatedArtist);
  }

  async deleteArtist(id: string) {
    const response = await this.delete(`/${id}`);
    if (response.deletedCount) {
      return id;
    }
    return "No artist with such id";
  }
}
