import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/carts/cartsSlices';
import productReducer from './features/products/productSlices';
import { api } from './api/apiSlices';
import userReducer from './features/user/usersSlice';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
