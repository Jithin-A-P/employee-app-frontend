import Shelf from '../types/shelf';
import baseApi from './base-api';

const shelfApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getShelflist: builder.query({
      query: () => ({
        url: '/shelfs',
        method: 'GET'
      }),
      providesTags: ['Shelves']
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
      invalidatesTags: ['Shelves']
    }),
    editShelf: builder.mutation({
      query: ({ id, body }) => ({
        url: `/shelfs/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Shelves']
    }),
    deleteShelf: builder.mutation({
      query: (id) => ({
        url: `/shelfs/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Shelves']
    })
  })
});

export default shelfApi;
export const {
  useCreateShelfMutation,
  useEditShelfMutation,
  useDeleteShelfMutation,
  useGetShelfQuery,
  useLazyGetShelfQuery,
  useGetShelflistQuery
} = shelfApi;
