import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/user.service";
import { Credentials } from "../../interfaces/credentials";
import { UserData } from "../../interfaces/userData";


export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("token");
      return;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: UserData, thunkAPI) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
