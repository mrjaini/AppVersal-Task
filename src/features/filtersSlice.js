import { createSlice } from '@reduxjs/toolkit';

// Get the dates from the reference image
const initialState = {
  dateRange: {
    startDate: new Date('2025-07-05T00:00:00Z').toISOString(),
    endDate: new Date('2025-07-11T23:59:59Z').toISOString(),
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Action to update the date range
    setDateRange: (state, action) => {
      state.dateRange.startDate = action.payload.startDate;
      state.dateRange.endDate = action.payload.endDate;
    },
  },
});

export const { setDateRange } = filtersSlice.actions;
export default filtersSlice.reducer;