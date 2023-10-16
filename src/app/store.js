import { configureStore } from '@reduxjs/toolkit';
import { userReducer, login, logout, setPackage } from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store, login, logout, setPackage }