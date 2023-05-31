import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsApi from "./api/prodcuctsApi";
import CategoriesApi from "./api/categoriesApi";

const RootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [CategoriesApi.reducerPath]: CategoriesApi.reducer,
});
const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productsApi.middleware, CategoriesApi.middleware);
  },
});
export default store;
