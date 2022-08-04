import thunk from "redux-thunk";
import reducers from "./reducers";
import { saveState, persistedState } from "./persisted.store";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducers,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
  // enhancers: composedEnhancers,
});

// Checking Saving User data if not available in storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
