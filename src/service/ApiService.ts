import { injectable } from "inversify";
import mockData from "./mockData.json";
import {ApiResponseType} from "../types/ApiResponseType";

export interface ApiServiceType {
  get: () => Promise<ApiResponseType>;
}

@injectable()
export default class ApiService implements ApiServiceType {
  public get = async (): Promise<ApiResponseType> => {
    return mockData;
  }
}
