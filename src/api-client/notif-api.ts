import baseApi from './base-api';

const notifApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (queryParams) => ({
        url: '/notifications',
        params: { ...queryParams },
        method: 'GET'
      }),
      providesTags: ['Notifications']
    }),
    readNotification: builder.mutation({
      query: (id) => ({
        url: `/notifications/${id}`,
        method: 'PATCH',
        body: {
          status: 'read'
        }
      }),
      invalidatesTags: ['Notifications']
    })
  })
});

export const {
  useGetNotificationsQuery,
  useLazyGetNotificationsQuery,
  useReadNotificationMutation
} = notifApi;
