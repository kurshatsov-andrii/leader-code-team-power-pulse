import { createSelector } from '@reduxjs/toolkit';

export const selectProductsList = (state) => state.products.list;

// export const selectCategoriesProducts = (state) => state.products.categories;
export const selectCategoriesProducts = (state) => state.products.categories.sort();

export const selectIsLoadingProduct = (state) => state.products.isLoading;

export const selectError = (state) => state.products.error;

export const selectFilter = (state) => state.products.filter;

export const selectFilteredProducts = createSelector(selectProductsList, selectFilter, (products, filter) =>
  products
    ? products
        .filter((product) => product.name.toLowerCase().includes(filter.search.toLowerCase()))
        .filter((product) => product.category === filter.category)
        .filter((product) => product.groupBloodNotAllowed === filter.recomended)
    : products
);
