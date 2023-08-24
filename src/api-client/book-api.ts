import Book from '../types/create-book-payload';
import baseApi from './base-api';

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookList: builder.query({
      query: ({ searchQuery }) => ({
        url: searchQuery ? `/books?searchQuery=${searchQuery}` : '/books',
        method: 'GET'
      }),
      providesTags: ['Books']
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
      invalidatesTags: ['Books']
    }),
    editBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Books']
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Books']
    }),
    getCategoryList: builder.query({
      query: () => ({
        url: '/book-categories',
        method: 'GET'
      }),
      providesTags: ['Books']
    }),
    notifyMe: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}/subscribe`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Books']
    }),
    lendBook: builder.mutation({
      query: ({ isbn, body }) => ({
        url: `/books/${isbn}/lend`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Books']
    }),
    requestBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}/subscribe`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Books']
    }),
    search: builder.query({
      query: (searchQuery) => ({
        url: `/books?searchQuery=${searchQuery}`,
        method: 'GET'
      }),
      providesTags: ['Books']
    })
  })
});

export default bookApi;
export const {
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useGetBookListQuery,
  useLazyGetBookListQuery,
  useGetBookQuery,
  useGetCategoryListQuery,
  useNotifyMeMutation,
  useLendBookMutation,
  useRequestBookMutation,
  useLazySearchQuery
} = bookApi;
