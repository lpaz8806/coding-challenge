import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import type ApiServiceType from '../../service/ApiService';
import type FormatListService from "../../service/FormatList";
import {SearchType} from "../../types/SearchType";

/**
 * View model used for {@link SearchResultsPage} component.
 */
@injectable()
export default class SearchViewModel implements SearchType {
  public searchValue!: string;
  public searchResults = [{}];

  constructor(
      @inject('FORMAT_LIST_SERVICE') private formatListService: FormatListService,
      @inject('API_SERVICE') private apiService: ApiServiceType,
  ) {
    makeObservable(this, {
      searchValue: observable,
      search: action,
    });
  }

  public search = async (value: string) => {
    this.searchValue = value;
    const response = await this.apiService.get();
    response.data = this.formatListService.formatList(response.data);

    return response;
  };
}
