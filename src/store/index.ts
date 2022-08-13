import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    authReducer: () => {},
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
