import Shelf from '../types/shelf';
import baseApi from './base-api';

const shelfApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShelflist: builder.query({
      query: () => ({
        url: '/shelfs',
        method: 'GET'
      })
    }),
    getShelf: builder.query({
      query: (id) => ({
        url: `/shelfs/${id}`,
        method: 'GET'
      })
    }),
    createShelf: builder.mutation({
      query: (body: Shelf) => ({
        url: '/shelfs',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    editShelf: builder.mutation({
      query: ({ id, body }) => ({
        url: `/shelfs/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    deleteShelf: builder.mutation({
      query: (id) => ({
        url: `/shelfs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employees']
    })
  })
});

export default shelfApi;
export const {
  useCreateShelfMutation,
  useEditShelfMutation,
  useDeleteShelfMutation,
  useGetShelfQuery,
  useGetShelflistQuery
} = shelfApi;
