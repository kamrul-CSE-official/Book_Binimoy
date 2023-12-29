import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/carts/cartsSlices';
import productReducer from './features/products/productSlices';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
