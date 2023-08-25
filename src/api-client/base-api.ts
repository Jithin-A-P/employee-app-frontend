import { API_BASE_URL } from '../constants/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    // headers.set('Content-Type', 'application/json');
    const token = localStorage.getItem('auth-token');

    if (token) headers.set('authorization', `Bearer ${token}`);

    return headers;
  }
});

const baseApi = createApi({
  baseQuery: baseQuery,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['Employees', 'Books', 'Shelves', 'Employee', 'Notifications']
});

export default baseApi;
