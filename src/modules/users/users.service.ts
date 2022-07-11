import { RESTDataSource } from "apollo-datasource-rest";

export default class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3004/v1/users";
  }
  async getUser(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }
  async getJWT(
    firstName: string,
    secondName: string,
    password: string,
    email: string
  ) {
    return await this.post("/login", {
      firstName,
      secondName,
      password,
      email,
    });
  }
  async registerUser(newUser: {
    firstName?: string;
    lastName?: string;
    password: string;
    email: string;
  }) {
    return await this.post("/register", newUser);
  }
}
