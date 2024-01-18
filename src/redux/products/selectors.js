export const selectCategoriesProducts = (state) => state.products.categories;

export const selectProductsList = (state) => state.products.list;

export const selectIsLoadingProduct = (state) => state.products.isLoading;

export const selectError = (state) => state.products.error;

export const selectFilter = (state) => state.products.filter;
