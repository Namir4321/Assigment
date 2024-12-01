import { AllUserFetch } from "./apicall";
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users/fetch",
  initialState: {
    users: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    logoutusers: (state) => {
      localStorage.removeItem("user");
      return {
        users: [],
        isFetching: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AllUserFetch.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(AllUserFetch.fulfilled, (state, action) => {
console.log([])
        state.isFetching = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(AllUserFetch.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload || "An unexpected error occurred";
      });
  },
});
export const { logoutusers } = userSlice.actions;
export default userSlice.reducer;
