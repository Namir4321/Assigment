import { ALlProductList } from "./apicall";
import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product/fetch",
  initialState: {
    product: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    logoutusers: (state) => {
      localStorage.removeItem("product");
      return {
        product: [],
        isFetching: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ALlProductList.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(ALlProductList.fulfilled, (state, action) => {
console.log(action.payload)
        state.isFetching = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(ALlProductList.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload || "An unexpected error occurred";
      });
  },
});
export const { logoutusers } = productSlice.actions;
export default productSlice.reducer;
