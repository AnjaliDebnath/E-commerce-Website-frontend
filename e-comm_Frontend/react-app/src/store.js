import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice'; // make sure to import your cartReducer
import authReducer from './slices/AuthSlice'; // make sure to import your cartReducer

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer
  },
});
