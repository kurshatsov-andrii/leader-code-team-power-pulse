export const selectCategoriesProducts = (state) => state.products.categories;

export const selectProductsList = (state) => state.products.list;

export const selectIsLoadingProduct = (state) => state.products.isLoading;

export const selectError = (state) => state.products.error;

export const selectSearchFilter = (state) => state.products.filter.search;
export const selectCategoryFilter = (state) => state.products.filter.category;
export const selectRecomendedFilter = (state) => state.products.filter.recomended;
