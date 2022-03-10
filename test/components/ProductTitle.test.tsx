import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src'
import { product1 } from '../data/products';

describe('ProdcutTitle', () => {
  it('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Producto" />
    )

    // console.log(wrapper.toJSON())
    expect( wrapper.toJSON() ).toMatchSnapshot()
  });

  it('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => (
          <ProductTitle />
        )}
      </ProductCard>
    )

    // console.log(wrapper.toJSON())
    expect( wrapper.toJSON() ).toMatchSnapshot()
  });
});
