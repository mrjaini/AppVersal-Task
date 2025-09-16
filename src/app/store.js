import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../features/filtersSlice';
import dashboardReducer from '../features/dashboardSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    dashboard: dashboardReducer,
  },
});