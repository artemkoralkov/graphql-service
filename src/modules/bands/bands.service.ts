import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { Member } from "./classes/Member";

export default class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3003/v1/bands";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getBand(id: string) {
    return await this.get(`/${id}`);
  }

  async getBands(limit: number = 0, offset: number = 0) {
    const response = await this.get("", { limit, offset });
    return response.items;
  }

  async createBand(newBand: {
    name: string;
    origin?: string;
    members?: Member[];
    website?: string;
    genresIds?: string[];
  }) {
    return await this.post("", newBand);
  }

  async updateBand(
    id: string,
    updatedBand: {
      name?: string;
      origin?: string;
      members?: Member[];
      website?: string;
      genresIds?: string[];
    }
  ) {
    return await this.put(`/${id}`, updatedBand);
  }

  async deleteBand(id: string) {
    const response = await this.delete(`/${id}`);
    if (response.deletedCount) {
      return id;
    }
    return "No band with such id";
  }
}
