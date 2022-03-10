import React, { createContext, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const useProductContext = () => useContext(ProductContext);

export const ProductCard = ({ 
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: ProductCardProps) => {

  const {counter, maxCount, isMaxCountReached, increaseBy, reset} 
    = useProduct({ onChange, product, value, initialValues })

  return (
    <Provider value={{
      product,
      counter,
      maxCount,
      increaseBy
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          product,
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          reset,
          increaseBy
        })}
      </div>
    </Provider>
  )
}
