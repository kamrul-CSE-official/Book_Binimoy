import { api } from '@/redux/api/apiSlices';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comments/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [`comments`],
    }),
    getComment: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: [`comments`],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
