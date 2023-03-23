import {injectable} from "inversify";

export interface FormatListService {
  formatList: (list: Array<any>) => Array<any>;
}

@injectable()
export default class FormatList implements FormatListService {
  public formatList = (list: Array<any>): Array<any> => {
    return list.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
      };
    });
  }
}
