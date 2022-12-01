import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),

  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({search , check}) => `cities?continent=${check}&name=${search}`,
    }),
    delCity: builder.mutation({
      query: ( id ) => ({
        url: `/cities/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default citiesAPI;
export const { useGetAllQuery , useDelCityMutation } = citiesAPI;
