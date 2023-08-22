import Book from '../types/create-book-payload';
import baseApi from './base-api';

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookList: builder.query({
      query: () => ({
        url: '/books',
        method: 'GET'
      })
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'GET'
      })
    }),
    createBook: builder.mutation({
      query: (body: Book) => ({
        url: '/books',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    editBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Employees']
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employees']
    })
  })
});

export default bookApi;
export const {
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useGetBookListQuery,
  useGetBookQuery
} = bookApi;
