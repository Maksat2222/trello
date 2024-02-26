import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosos } from "../../api/api";

export const registeruser = createAsyncThunk(
  "user/register",

  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosos.post("/register", userData.userData);
      userData.navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.responce.data);
    }
  }
);
export const loginuser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    console.log(userData);

    try {
      const response = await axiosos.post("/auth", userData.UserData);
      userData.navigate("/main");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.responce.data);
    }
  }
);
