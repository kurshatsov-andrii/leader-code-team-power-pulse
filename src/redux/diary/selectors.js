export const selectDiaryProducts = (state) => state.diary.products;

export const selectDiaryExercises = (state) => state.diary.exercises;

export const selectIsLoadingDiary = (state) => state.diary.isLoading;

export const selectCalories = (state) => state.diary.consumedCalories;

export const selectDoneExercisesTime = (state) => state.diary.doneExercisesTime;

export const selectBurnedCalories = (state) => state.diary.burnedCalories;

export const selectError = (state) => state.diary.error;

export const selectErrorProductsAndExercisesError = (state) => state.diary.productsAndExercisesError;

export const selectAddProductIsLoading = (state) => state.products.isLoading;

export const selectAddProductError = (state) => state.products.error;

export const selectDiaryDate = (state) => state.diary.date;
