import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsApi from "./api/prodcuctsApi";

const RootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});
const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productsApi.middleware);
  },
});
export default store;
