import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
    endpoints:(builder)=>({
        getMovies:builder.query({
            query: (searchTerm) => `?s=${searchTerm}&apikey=9c90dc3e`,
            
        })
    })
})

export const {useGetMoviesQuery} = apiSlice;