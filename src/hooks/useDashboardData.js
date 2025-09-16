import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardData } from '../features/dashboardSlice';

export const useDashboardData = () => {
  const dispatch = useDispatch();
  
  // Select the filter state from the Redux store
  const filters = useSelector((state) => state.filters);

  // Select the data and status from the Redux store
  const { 
    kpiData, 
    status, 
    error 
  } = useSelector((state) => state.dashboard);

  // useEffect hook to dispatch the data fetching action
  // It runs on initial component mount and whenever the filters change
  useEffect(() => {
    // We only fetch if the status is 'idle' to prevent re-fetching on every render
    // Or you could add logic to refetch based on filter changes
    if (status === 'idle') {
       dispatch(fetchDashboardData(filters));
    }
  }, [status, filters, dispatch]);
  
  // A function to manually trigger a refresh
  const refreshData = () => {
    dispatch(fetchDashboardData(filters));
  };

  // Return the data and loading status for the component to use
  return {
    kpiData,
    isLoading: status === 'loading',
    error,
    refreshData,
  };
};