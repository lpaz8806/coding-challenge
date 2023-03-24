import {injectable} from "inversify";
import {Product} from "../types/Product";
import {ProductListItem} from "../types/ProductListItem";

export interface FormatListService<TSource = any, TDest = any> {
  formatList: (list: Array<TSource>) => Array<TDest>;
}

@injectable()
export default class FormatList implements FormatListService<Product, ProductListItem> {
  public formatList = (list: Array<Product>): Array<ProductListItem> => {
    return list.map((item: Product) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
      }
    });
  }
}
