import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// --- Mock API Call ---
// In a real app, this would be an actual API call using fetch or axios.
// We'll simulate it with a promise and mock data.
const mockApi = (filters) => {
  console.log("Fetching data with filters:", filters);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        kpiData: [
          { title: 'Conversions ROAS', value: '$6,109.89', change: 27.42, isPositive: true },
          { title: 'Total Spend', value: '$2,101', change: 15.5, isPositive: true },
          { title: 'Avg. CPA', value: '$2.91', change: -5.2, isPositive: false },
          { title: 'Impressions', value: '85,321', change: 35.0, isPositive: true },
          { title: 'Total Taps', value: '4,050', change: 21.8, isPositive: true },
        ],
        // Other data sets would be populated here
      });
    }, 1000); // Simulate 1 second network delay
  });
};
// --- End Mock API Call ---

// Create an async thunk for fetching data
export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async (filters, { getState }) => {
    // In a real app, you might use getState() to get existing state if needed
    const response = await mockApi(filters);
    return response;
  }
);

const initialState = {
  kpiData: [],
  trendsData: [],
  topLists: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  // Handle actions from the async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Populate state with data from the mock API payload
        state.kpiData = action.payload.kpiData;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;