import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const api = 'http://localhost:3000/';
export const sidebarSlice = createApi({
  reducerPath: 'citiesApi',
  baseQuery: axiosBaseQuery({ baseUrl: api }),
  tagTypes: ['CityLocationList'],
  endpoints: (build) => ({
    fetchAllCityLocations: build.query({
      query: () => ({
        url: '/api/cities',
        method: 'get',
      }),
      providesTags: ['CityLocationList'],
    }),
  }),
});

export const { useFetchAllCityLocationsQuery } = sidebarSlice;
