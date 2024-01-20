import { createSlice } from '@reduxjs/toolkit';
import { categoriesListThunk, productListThunk } from './operations';

export const recommendedOptions = [
  { value: 'all', label: 'All' },
  { value: 'false', label: 'Recommended' },
  { value: 'true', label: 'Not recommended' },
];

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: [],
    list: [],
    isLoading: false,
    error: null,
    filter: {
      search: '',
      category: { value: 'all', label: 'Categories' },
      recomended: recommendedOptions[0],
    },
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(categoriesListThunk.pending, handlePending)
      .addCase(categoriesListThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(categoriesListThunk.rejected, handleRejected)
      .addCase(productListThunk.pending, handlePending)
      .addCase(productListThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.list = payload.products;
      })
      .addCase(productListThunk.rejected, handleRejected),
});

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const productsReducer = productSlice.reducer;
export const { setFilter } = productSlice.actions;
