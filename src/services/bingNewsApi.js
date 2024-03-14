import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createBingNewsSearchRequest = (url) => ({
  url,
  headers: {
    'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_KEY, // Bing News Search API key header
  },
});

export const bingNewsApi = createApi({
  reducerPath: 'bingNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }), // Bing News Search API base URL
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createBingNewsSearchRequest(`?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = bingNewsApi;