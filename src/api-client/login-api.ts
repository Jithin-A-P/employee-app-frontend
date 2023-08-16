import LoginPayload from '../types/login-payload';
import baseApi from './base-api';

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginPayload) => ({ url: '/employees/login', method: 'POST', body })
    })
  })
});

export default loginApi;
export const { useLoginMutation } = loginApi;
