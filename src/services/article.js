import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
// import dotenv from 'dotenv';
// dotenv.config()

// const axios = require('axios');

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// const rapidApiKey = process.env.VITE_RAPID_API_ARTICLE_KEY;




export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    prepareHeaders(headers,api) {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    }, // eslint-disable-line no-unused-
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `?url=${encodeURIComponent(params.articleUrl)}&length=3`
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi; 

// export const { useGetSummaryQuery } = articleApi;


/* export const articleApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com'
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
      // query: (params) => '/summarize?url=https://developers.facebook.com/docs/facebook-login/web/login-button',
    }),
  }),
});
export const { useLazyGetSummaryQuery } = articleApi;  */





export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => '/character',
    }),
  }),
});

// Export hooks for querying the API
export const { useLazyFetchDataQuery } = api;
