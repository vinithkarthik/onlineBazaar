import { createContext, useReducer } from 'react';
import { productReducer } from '../Reducers/ProductReducer';
const initialState = {
  addedProducts: {},
  totalProducts: 0
}

export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [productData, dispatchProductData] = useReducer(productReducer, initialState);
  return <productContext.Provider value={{ productData, dispatchProductData }}>{props.children}</productContext.Provider>
}

export default ProductContextProvider