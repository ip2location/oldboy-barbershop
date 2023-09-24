import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../../services/baseQuery';

const api = 'http://localhost:3000/';

export const searchingSlice = createApi({
  reducerPath: 'citiesApi',
  baseQuery: axiosBaseQuery({ baseUrl: api }),
  tagTypes: ['CityLocationList'],
  endpoints: (build) => ({
    fetchCityList: build.query({
      query: (params: { page: number; offset: number }) => ({
        url: `/api/cities?page=${params.page}&offset=${params.offset}`,
        method: 'get',
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ['CityLocationList'],
    }),
  }),
});

export const { useLazyFetchCityListQuery, useFetchCityListQuery } = searchingSlice;
