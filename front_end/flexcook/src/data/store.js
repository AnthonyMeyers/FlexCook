import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredientApi from "./ingredientapi";

const store = configureStore({
  reducer: combineReducers({
    [ingredientApi.reducerPath]: ingredientApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ingredientApi.middleware),
});

export default store;
