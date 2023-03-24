import { injectable } from "inversify";
import mockData from "./mockData.json";
import {ApiResponseType} from "../types/ApiResponseType";
import {Product} from "../types/Product";

export interface ApiServiceType<T = any> {
  get: () => Promise<ApiResponseType<T>>;
}

@injectable()
export default class ApiService implements ApiServiceType<Array<Product>> {
  public get = async (): Promise<ApiResponseType<Array<Product>>> => {
    return mockData;
  }
}
