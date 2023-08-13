import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@/services/baseQuery';

const api = 'http://localhost:3000/';

export const searchingSlice = createApi({
  reducerPath: 'citiesApi',
  baseQuery: axiosBaseQuery({ baseUrl: api }),
  tagTypes: ['CityLocationList'],
  endpoints: (build) => ({
    fetchCityList: build.query({
      query: () => ({
        url: '/api/cities',
        method: 'get',
      }),
      providesTags: ['CityLocationList'],
    }),
  }),
});

export const { useFetchCityListQuery } = searchingSlice;
