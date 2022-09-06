import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "./apis/auth.api";
import { favouriteApi } from "./apis/favourite.api";
import { movieApi } from "./apis/movie.api";
import AuthSlice from "./slices/auth.slice";

const persistConfig = {
  key: AuthSlice.name,
  storage,
};

const rootReducer = combineReducers({
  // API's
  [authApi.reducerPath]: authApi.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [favouriteApi.reducerPath]: favouriteApi.reducer,

  // Slices
  [AuthSlice.name]: persistReducer(persistConfig, AuthSlice.reducer),
});

//

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authApi.middleware)
      .concat(movieApi.middleware)
      .concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const persistor = persistStore(store);
export default store;
