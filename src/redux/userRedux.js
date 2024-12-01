import { LoginCall } from "./apicall";
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: "",
    isFetching: false,
    error: null,
    isLoggedIn: false,
    accesstoken: "",
  },
  reducers: {
    logoutuser: (state) => {
      localStorage.removeItem("user");
      return {
        currentUser: "",
        isFetching: false,
        error: null,
        isLoggedIn: false,
        accesstoken: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginCall.pending, (state) => {
        state.isFetching = true;
        state.isLoggedIn = false;
         state.error = null;
      })
      .addCase(LoginCall.fulfilled, (state, action) => {
        console.log(action.payload.accessToken)
        state.isFetching = false;
        state.currentUser = action.payload.user._id;
        state.isLoggedIn = true;
        state.accesstoken = action.payload.accessToken;
        state.userinfo = action.payload.user;
         state.error = null;
      })
      .addCase(LoginCall.rejected, (state, action) => {
        console.log(action)
        state.isFetching = false;
        state.error = action.payload || "An unexpected error occurred";
        state.isLoggedIn = false;
      });
  },
});
export const { userstart, userSucess, userFailure, logoutuser } =
  userSlice.actions;
export default userSlice.reducer;
