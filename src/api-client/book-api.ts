import Book from '../types/create-book-payload';
import baseApi from './base-api';

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (body: Book) => ({
        url: '/books',
        method: 'POST',
        body
      })
    }),
    editeBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'POST',
        body
      })
    })
  })
});

export default bookApi;
export const { useCreateBookMutation, useEditeBookMutation } = bookApi;
