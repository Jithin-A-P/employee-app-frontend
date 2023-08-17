import baseApi from './base-api';

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => '/departments'
    })
  })
});

export default departmentApi;
export const { useGetDepartmentsQuery } = departmentApi;
