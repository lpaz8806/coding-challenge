import {ProductListItem} from "./ProductListItem";

export default interface SearchViewModelType {
    searchValue: string;
    setSearchValue: (value: string) => void;

    selectedProduct: ProductListItem | null;
    setSelectedProduct: (selectedProduct: ProductListItem | null) => void;

    searchResults: Array<ProductListItem>;
    search: () => Promise<void>;
}