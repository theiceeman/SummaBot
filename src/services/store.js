import { configureStore } from "@reduxjs/toolkit";
import { api, articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(articleApi.middleware)
    .concat(api.middleware)
});
