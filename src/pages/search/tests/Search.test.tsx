import { render } from "@testing-library/react";
import {Search} from "../Search";
import SearchViewModelType from "../../../types/SearchViewModelType";
import {ProductListItem} from "../../../types/ProductListItem";

describe('SearchPage', () => {
  it('should render', () => {
    const viewModel = initViewModel();
    const { container } = render(<Search viewModel={viewModel} />);
    expect(container).toMatchSnapshot();
  });
});

function initViewModel(args: Partial<SearchViewModelType> = { }): SearchViewModelType {
  const defaultViewModel: SearchViewModelType = {
    search: async () => { },
    searchResults: [],
    searchValue: "",
    selectedProduct: null,
    setSearchValue: (value: string) => { },
    setSelectedProduct(selectedProduct: ProductListItem | null): void {}
  };
  return Object.assign({}, defaultViewModel, args);
}