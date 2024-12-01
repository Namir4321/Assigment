import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "@/requestMethod";
import { useSelector } from "react-redux";

export const RegisterCall = async ({ name, dob, email, password }) => {
  const data = { name, dob, email, password };
  try {
    const res = await publicRequest.post("api/auth/register", data);
    // console.log(res);
    return res;
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    } else {
      return { error: "Something went wrong. Please try again later." };
    }
  }
};

export const LoginCall = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    const user = { email, password };
    try {
      const res = await publicRequest.post("api/auth/login", user);
       localStorage.setItem("accesstoken", res.data.accessToken);
      return res.data;

    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        "Something went wrong. Please try again later.";
      return rejectWithValue(errorMessage);
    }
  }
);
export const AllUserFetch = createAsyncThunk("users/fetch", async (_,{getState}) => {
 const token = localStorage.accesstoken;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const res = await publicRequest.get("api/users/allusers",{headers});

    console.log(res.data);
    return res.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.error ||
      "Something went wrong. Please try again later.";
    return rejectWithValue(errorMessage);
  }
});
