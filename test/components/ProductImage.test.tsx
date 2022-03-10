import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src'
import { product2 } from '../data/products';

describe('ProductImage', () => {
  it('debe mostrar el componente correctamente la ruta de la imagen personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img={'/dummy-img'} />
    )

    // console.log(wrapper.toJSON())
    expect( wrapper.toJSON() ).toMatchSnapshot()
  });

  it('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <ProductImage />
        )}
      </ProductCard>
    )

    // console.log(wrapper.toJSON())
    expect( wrapper.toJSON() ).toMatchSnapshot()
  });
});
