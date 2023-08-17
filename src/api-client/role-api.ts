import baseApi from './base-api';

const roleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query({
      query: () => '/roles'
    })
  })
});

export default roleApi;
export const { useGetRolesQuery } = roleApi;
