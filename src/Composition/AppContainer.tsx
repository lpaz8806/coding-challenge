import { Container } from "inversify";
import SearchViewModel from "../pages/search/SearchViewModel";
import ApiService from "../service/ApiService";
import FormatList from "../service/FormatList";
import TYPES from "./TYPES";

let container = new Container();

container.bind(TYPES.ApiService).to(ApiService).inSingletonScope();
container.bind(TYPES.FormatListService).to(FormatList).inSingletonScope();
container.bind(TYPES.SearchPageViewModel).to(SearchViewModel);

export const appContainer: Container = container;
