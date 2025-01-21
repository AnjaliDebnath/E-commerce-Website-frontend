import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, { payload }) => {
        console.log("Adding item to cart:", payload);
        const existingItem = state.items.find((item) => item._id === payload._id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({ ...payload, quantity: 1 });
        }
    },
    

    changeQuantity: (state, { payload }) => {
        const item = state.items.find(item => item._id === payload.id);
        if (item) {
            item.quantity += payload.increment;
            if (item.quantity <= 0) {
                state.items = state.items.filter(item => item._id !== payload.id);
            }
        }
    },
    removeItem: (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload.id);
    },
  },
});

export const { addItem, removeItem, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
