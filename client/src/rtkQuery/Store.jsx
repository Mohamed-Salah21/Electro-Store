import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageSlice from "./slices/langSlice";
const RootReducer = combineReducers({
  language: languageSlice,
});

const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(),
});
export default Store;
