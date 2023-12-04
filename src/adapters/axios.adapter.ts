import { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import api from "../utils/api";

export default class AxiosAdapter implements HttpAdapter {
  private readonly http: AxiosInstance = api;

  get = async <T>(url: string): Promise<T> => {
    try {
      const { data } = await this.http.get<T>(url);
      return data;
    } catch (error) {
      throw error;
    }
  };
}
