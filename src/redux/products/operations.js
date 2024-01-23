import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://leader-code-team-power-pulse-back-end.onrender.com/',
});

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = `Bearer ${token}`;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

export const categoriesListThunk = createAsyncThunk('category', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const userToken = state.auth.token;

  if (userToken) {
    token.set(userToken);
    try {
      const res = await instance.get('products/category');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const productListThunk = createAsyncThunk('products', async (filter, thunkAPI) => {
  const state = thunkAPI.getState();
  const userToken = state.auth.token;
  const page = filter.page;

  if (userToken) {
    token.set(userToken);
    try {
      const { search, category, recomended } = filter;

      const queryParams = [];

      if (search && search.trim() !== '') {
        queryParams.push(`search=${search}`);
      }

      if (category && category !== 'all') {
        queryParams.push(`category=${category}`);
      }

      if (recomended && recomended !== 'all') {
        queryParams.push(`recommended=${recomended}`);
      }

      const queryParamsString = queryParams.join('&');

      const url = `products?${queryParamsString}&page=${page}&limit=24`;

      const res = await instance.get(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
