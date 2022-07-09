import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/v1/genres";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getGenre(id: string) {
    const response = await this.get(`/${encodeURIComponent(id)}`);
    if (response) {
      return response;
    }
  }

  async getGenres() {
    const response = await this.get("");
    return response.items;
  }

  async createGenre(newGenre: {
    name: string;
    description?: string;
    country?: string;
    year?: number;
  }) {
    return await this.post("", newGenre);
  }

  async updateGenre(
    id: string,
    updatedGenre: {
      name?: string;
      description?: string;
      country?: string;
      year?: number;
    }
  ) {
    return await this.put(`/${id}`, updatedGenre);
  }

  async deleteGenre(id: string) {
    const response = await this.delete(`/${id}`);
    if (response.deletedCount) {
      return id;
    }
    return "No genre with such id";
  }
}
