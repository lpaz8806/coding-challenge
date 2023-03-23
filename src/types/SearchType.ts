export type SearchType<T = any> = {
    searchValue: string;
    searchResults: Array<T>;
    search: (value: string) => void;
}