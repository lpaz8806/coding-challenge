import { render } from "@testing-library/react";
import {ProductListView, ProductListViewProps} from "../ProductListView";
import {ProductListItem} from "../../../types/ProductListItem";

describe('ProductListView', () => {
  it('should render "No results" when no items', () => {
    const props = {
      items: [],
      onProductSelected: () => { }
    };

    const {container} = render(<ProductListView {...props} />);
    expect(container.textContent).toBe("No results");
  });

  it.each([0, 1, 5])('should render the right amount of list items', (count) => {
    const props: ProductListViewProps = {
      items: generateProducts(count),
      onProductSelected: () => { }
    };

    const {container} = render(<ProductListView {...props} />);
    const lis = container.getElementsByTagName("li");
    expect(lis.length).toBe(count);
  });

  it('should fire onProductSelected when click', () => {
    const onProductSelectedFake = jest.fn(() => { });

    const props: ProductListViewProps = {
      items: generateProducts(2),
      onProductSelected: onProductSelectedFake
    };

    const {container} = render(<ProductListView {...props} />);
    const lis = container.getElementsByTagName("li");

    lis[0].click();

    expect(onProductSelectedFake.mock.calls).toHaveLength(1);
  });

  it.each([0,1,2,3,4])('should target the right product when item click', (i) => {
    let clickedProduct: ProductListItem | null = null;
    const onProductSelectedFake = jest.fn((p: ProductListItem) => { clickedProduct = p});

    const products = generateProducts(5);
    const props: ProductListViewProps = {
      items: products,
      onProductSelected: onProductSelectedFake
    };

    const {container} = render(<ProductListView {...props} />);
    const lis = container.getElementsByTagName("li");
    lis[i].click();

    expect(onProductSelectedFake.mock.calls).toHaveLength(1);
    expect(products[i]).toBe(clickedProduct);
  });
});

function generateProducts(count: number) : ProductListItem[] {
  return [...Array(count).keys()].map(i => {
    return {
      id: i + 1, title: `Product ${i + 1}`, price: 100 + i, description: `Description ${i + 1}`
    }
  });
}