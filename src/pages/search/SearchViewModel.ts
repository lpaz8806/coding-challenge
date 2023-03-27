import { inject, injectable } from 'inversify';
import {makeAutoObservable} from 'mobx';
import type ApiServiceType from "../../service/ApiService";
import {ProductListItem} from "../../types/ProductListItem";
import FormatListService from "../../service/FormatList";
import SearchViewModelType from "../../types/SearchViewModelType";

/**
 * View model used for {@link Search} component.
 */
@injectable()
export default class SearchViewModel implements SearchViewModelType {
  public searchValue: string = "";
  public searchResults: Array<ProductListItem> = [];
  public selectedProduct: ProductListItem | null = null;

  constructor(
      @inject('FORMAT_LIST_SERVICE') private formatListService: FormatListService,
      @inject('API_SERVICE') private apiService: ApiServiceType,
  ) {
    makeAutoObservable(this);
  }

  public setSearchValue = (value: string) => {
    this.searchValue = value;
  };

  public setResults = (searchResults: Array<ProductListItem>) => this.searchResults = searchResults;

  public setSelectedProduct = (selectedProduct: ProductListItem | null) => this.selectedProduct = selectedProduct;

  public search = async () => {
    const response = await this.apiService.get();
    const data = this.formatListService.formatList(response.data);
    const results = data.filter(item => contains(item.title, this.searchValue));
    this.setResults(results);
  };
}

function contains(text: string, pattern: string) : boolean {
  return text.toLowerCase().includes(pattern.toLowerCase())
}