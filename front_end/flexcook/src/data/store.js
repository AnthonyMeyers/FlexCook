import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ingredientApi from "./ingredientapi";
import messageSlice from "./messager";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "general",
  storage,
};

const reducers = combineReducers({
  [messageSlice.name]: messageSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: combineReducers({
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    persistedReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ingredientApi.middleware),
});

export default store;
