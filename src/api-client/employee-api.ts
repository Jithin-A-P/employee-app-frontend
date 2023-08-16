// import Employee from '../types/employee';
import Employee from '../types/employee';
import baseApi from './base-api';

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => '/employees'
    }),
    getAnEmployee: builder.query({
      query: (id) => `/employees/${id}`
    }),
    addAnEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: '/employees',
        method: 'POST',
        body
      })
    }),
    deleteAnEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export default employeeApi;
export const {
  useGetEmployeeListQuery,
  useGetAnEmployeeQuery,
  useAddAnEmployeeMutation,
  useDeleteAnEmployeeMutation
} = employeeApi;
