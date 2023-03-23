import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import type ApiServiceType from '../../service/ApiService';

export type SearchType = {
  searchValue: string;
  searchResults: Array<any>;
  search: (value: string) => void;
}

/**
 * View model used for {@link SearchResultsPage} component.
 */
@injectable()
export default class SearchViewModel implements SearchType {
  public searchValue!: string;
  public searchResults = [{}];

  constructor(
      @inject('FORMAT_LIST_SERVICE') private formatListService: any,
      @inject('API_SERVICE') private apiService: ApiServiceType,
  ) {
    makeObservable(this, {
      searchValue: observable,
      search: action,
    });
  }

  public search = async (value: any) => {
    this.searchValue = value;
    const response = await this.apiService.get();
    response.data = this.formatListService.formatList(response.data);

    return response;
  };
}
