import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/CartSlice'; // make sure to import your cartReducer

export default configureStore({
  reducer: {
    
    cart: cartReducer
  },
});
