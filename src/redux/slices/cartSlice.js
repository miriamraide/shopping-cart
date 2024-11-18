import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "js-cookie";

const initialState = {
  loading: true,
  cartItems: [],
};

const addDecimals = (num) => {
  return (Math.round(num * 1000) / 1000).toFixed(0); //
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add to Cart reducer one //

    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 20000 ? 0 : 10000);

      state.taxPrice = addDecimals(Number(0.21 * state.itemsPrice));

      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      Cookies.set("cart", JSON.stringify(state));
    },

    //remove from cart  - reducer dos//

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 20000 ? 0 : 10000);

      state.taxPrice = addDecimals(Number(0.21 * state.itemsPrice));

      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      Cookies.set("cart", JSON.stringify(state));
    },

    //reducer tres //

    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart, hideLoading } = cartSlice.actions;

export default cartSlice.reducer;
