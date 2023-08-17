// import Employee from '../types/employee';
import Employee from '../types/employee';
import baseApi from './base-api';

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => '/employees',
      providesTags: ['Employees']
    }),
    getAnEmployee: builder.query({
      query: (id) => `/employees/${id}`
    }),
    addAnEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    editAnEmployee: builder.mutation({
      query: ({ id, body }) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    deleteAnEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employees']
    })
  })
});

export default employeeApi;
export const {
  useGetEmployeeListQuery,
  useGetAnEmployeeQuery,
  useLazyGetAnEmployeeQuery,
  useAddAnEmployeeMutation,
  useDeleteAnEmployeeMutation,
  useEditAnEmployeeMutation
} = employeeApi;
