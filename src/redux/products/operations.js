import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const categoriesListThunk = createAsyncThunk('categories', async (_, thunkAPI) => {
  try {
    // const res = await axios.get('/categories');
    const res = await axios.get('/');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const productListThunk = createAsyncThunk('products', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/byBloodGroup');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
