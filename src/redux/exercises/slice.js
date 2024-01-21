import { createSlice } from '@reduxjs/toolkit';
import { fetchSpecialCategories, fetchSpecialExercises } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('state.items', state.items);
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    data: null,
    currentPage: 1,
    perPage: 10,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSpecialExercises.pending, handlePending)
      .addCase(fetchSpecialExercises.fulfilled, (state, action) => {
        console.log(action)
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchSpecialCategories.pending, handlePending)
      .addCase(fetchSpecialCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchSpecialCategories.rejected, handleRejected),
});

export const exercisesReducer = exercisesSlice.reducer;
