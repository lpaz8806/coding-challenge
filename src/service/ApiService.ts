import { injectable } from "inversify";
import mockData from "./mockData.json";

export interface ApiResponseType {
  /**
   * Data returned in the response.
   */
  data: any;
  /**
   * The responses status code (if applicable).
   */
  status: number;
}

export interface ApiServiceType {
  get: () => Promise<ApiResponseType>;
}

@injectable()
export default class ApiService implements ApiServiceType {
  public get = async (): Promise<ApiResponseType> => {
    return mockData;
  }
}
