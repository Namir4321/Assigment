import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "@/requestMethod";
import { useSelector } from "react-redux";

export const RegisterCall = async ({ name, email, password }) => {
  const data = { name, email, password };
  console.log(data);
  try {
    const res = await publicRequest.post("api/auth/register", data);
    console.log(res);
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
      localStorage.setItem(
        "authData",
        JSON.stringify({
          accessToken: res.data.accessToken,
          userId: res.data.userId,
        })
      );
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        "Something went wrong. Please try again later.";
      return rejectWithValue(errorMessage);
    }
  }
);
export const ALlProductList = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    const token = authData?.accessToken;
    const userId = authData?.userId;

    if (!token || !userId) {
      return rejectWithValue("User is not authenticated.");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await publicRequest.get(`api/product/allproduct/${userId}`, {
        headers,
      });
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        "Something went wrong. Please try again later.";
      return rejectWithValue(errorMessage);
    }
  }
);
export const AllProductFetch = createAsyncThunk(
  "users/fetch",
  async (parseData, { getState }) => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    const token = authData?.accessToken;
    const userId = authData?.userId;

    console.log("Token:", token, "UserId:", userId);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const requestBody = { ...parseData, userId };
      const res = await publicRequest.post(
        "api/product/addproducts",
        requestBody,
        {
          headers,
        }
      );

      console.log(res.data);
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        "Something went wrong. Please try again later.";
      return rejectWithValue(errorMessage);
    }
  }
);
export const AllUserFetch = createAsyncThunk(
  "users/fetch",
  async (_, { getState }) => {
    const token = localStorage.accesstoken;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await publicRequest.get("api/users/allusers", { headers });

      console.log(res.data);
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error ||
        "Something went wrong. Please try again later.";
      return rejectWithValue(errorMessage);
    }
  }
);
export const GeneratePdf = async ({ data }) => {
  
  try {
    const res = await publicRequest.post("api/pdf/generate", data);
    console.log(res);
    return res;
  } catch (err) {
    if (err.response && err.response.data) {
      return err.response.data;
    } else {
      return { error: "Something went wrong. Please try again later." };
    }
  }
};