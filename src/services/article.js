import { createApi, fetchBaseQuery } from 
"@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const articleApi = createApi({
    reducerPath: 'articleApi',
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
    
});