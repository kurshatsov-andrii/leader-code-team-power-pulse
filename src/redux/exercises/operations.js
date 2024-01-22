import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const fetchSpecialCategories = createAsyncThunk('exercises/fetchSpecialCategories', async (params, thunkAPI) => {
  const { filter, page } = params;
  try {
    const res = await instance.get(`/exercises/${filter}?page=${page}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchSpecialExercises = createAsyncThunk('exercises/fetchSpecialExercises', async (params, thunkAPI) => {
  const { category, subcategory } = params;
  try {
    const res = await instance.get(`/exercises/${category}/${subcategory}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const changePageNumber = createAsyncThunk('exercises/changePageNumber', (pageNumber) => {
  return pageNumber;
});
