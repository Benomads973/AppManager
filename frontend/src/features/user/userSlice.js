// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('user/register', async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/', userData);
    return response.data;
  } catch (err) {
    throw new Error(err.message)
  }
  
});

export const loginUser = createAsyncThunk('user/login', async (userData) => {
  const response = await axios.post('http://localhost:5000/users/login', userData);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export default userSlice.reducer;
