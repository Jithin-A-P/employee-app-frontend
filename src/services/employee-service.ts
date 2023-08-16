import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/'
  }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        method: 'GET',
        url: 'employees'
      })
    })
  })
});

export default employeeService;
export const { useGetEmployeesQuery, useLazyGetEmployeesQuery } = employeeService;
