import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import orderReducer from './order';
import notificationReducer from './notification';

const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    notifications: notificationReducer,
  },
});

export default store;