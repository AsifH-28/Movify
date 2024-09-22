import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import MovieResponse from "../interface/TrendingMovie";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/" }),
    endpoints:(builder)=>({
        getTrndingMovies:builder.query<MovieResponse,void>({
            query: () => `3/trending/movie/week?api_key=79fd810b57f9f9f16635a4edd80a731a`,
            
        })
    })
})

export const {useGetTrndingMoviesQuery} = apiSlice;