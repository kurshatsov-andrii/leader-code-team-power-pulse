import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { profileReducer } from './userProfile/slice';
import { exercisesReducer } from './exercises/slice';
import { diaryReducer } from './diary/slice';
import { productsReducer } from './products/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const combinedReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  profile: profileReducer,
  exercises: exercisesReducer,
  diary: diaryReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
