import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesApi from "./api/categoriesApi";
import productsApi from "./api/productsApi";
import authApi from "./api/authApi";
const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      categoriesApi.middleware,
      productsApi.middleware,
      authApi.middleware
    ),
});
export default store;
