export const selectUserAuthenticated = (state) => state.auth.authenticated;
export const selectUsers = (state) => state.auth.userData;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
