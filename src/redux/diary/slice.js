import { createSlice } from '@reduxjs/toolkit';
import { deleteExercise, deleteProduct, getDiaryList, addDiaryProduct, addExercise } from './operations';

const initialState = {
  date: null,
  isLoading: false,
  error: null,
  productsAndExercisesError: null,
  burnedCalories: 0,
  consumedCalories: 0,
  doneExercisesTime: 0,
  products: [],
  exercises: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = true;
  state.error = payload.error;
};

const diary = createSlice({
  name: 'diary',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDiaryList.pending, handlePending);
    builder.addCase(getDiaryList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.date = payload.date;
      state.products = payload.products || [];
      state.exercises = payload.exercises || [];
      state.burnedCalories = payload.burnedCalories || 0;
      state.consumedCalories = payload.consumedCalories || 0;
      state.doneExercisesTime = payload.physicalActivityTimeDone || 0;
    });
    builder.addCase(getDiaryList.rejected, (state, { payload }) => {
      state.productsAndExercisesError = payload;
      state.burnedCalories = 0;
      state.consumedCalories = 0;
      state.doneExercisesTime = 0;
      state.isLoading = false;
      state.products = [];
      state.exercises = [];
    });

    builder.addCase(addDiaryProduct.pending, handlePending);
    builder.addCase(addDiaryProduct.fulfilled, handleFulfilled);
    builder.addCase(addDiaryProduct.rejected, handleRejected);

    builder.addCase(addExercise.pending, handlePending);
    builder.addCase(addExercise.fulfilled, handleFulfilled);
    builder.addCase(addExercise.rejected, handleRejected);

    builder.addCase(deleteProduct.pending, handlePending);
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      handleFulfilled(state);
      const deletedProduct = state.products.find((product) => product.productId._id === payload);
      const newProductsList = state.products.filter((product) => product.productId._id !== payload);
      state.products = newProductsList;
      state.consumedCalories -= deletedProduct.calories;
    });
    builder.addCase(deleteProduct.rejected, handleRejected);

    builder.addCase(deleteExercise.pending, handlePending);
    builder.addCase(deleteExercise.fulfilled, (state, { payload }) => {
      handleFulfilled(state);
      const deletedExercise = state.exercises.find((exercise) => exercise.exerciseId._id === payload);
      const newExercisesList = state.exercises.filter((exercise) => exercise.exerciseId._id !== payload);
      state.exercises = newExercisesList;
      state.doneExercisesTime -= deletedExercise.time;
      state.burnedCalories -= deletedExercise.calories;
    });
    builder.addCase(deleteExercise.rejected, handleRejected);
  },
});

export const diaryReducer = diary.reducer;
