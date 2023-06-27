import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const axios = require('axios');

const options = {
  method: "GET",
  url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
  params: {
    url: "https://time.com/6266679/musk-ai-open-letter/",
    length: "3",
  },
  headers: {
    "X-RapidAPI-Key": "822f1639cdmshaf5f7b4c3550fe8p1fea29jsn0e19333e955e",
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders(headers) {
    headers.set("X-RapidAPI-Key", 'KEY');
    headers.set("X-RapidAPI-Host", 'article-extractor-and-summarizer.p.rapidapi.com');
    }, // eslint-disable-line no-unused-
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`,
    }),
  }),
});
