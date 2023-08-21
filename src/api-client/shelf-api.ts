import Shelf from '../types/shelf';
import baseApi from './base-api';

const shelfApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    })
  })
});

export default shelfApi;
export const { useCreateShelfMutation, useEditShelfMutation } = shelfApi;
