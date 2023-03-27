import { injectable } from "inversify";
import mockData from "./mockData.json";
import {ApiResponseType} from "../types/ApiResponseType";
import {Product} from "../types/Product";

export type ApiServiceType = {
  get: () => Promise<ApiResponseType<Array<Product>>>;
}

@injectable()
export default class ApiService implements ApiServiceType {
  public get = async (): Promise<ApiResponseType<Array<Product>>> => {
    return mockData;
  }
}
