import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const itinerariesAPI = createApi({
  reducerPath: "itinerariesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),

  endpoints: (builder) => ({   
    delItinerary: builder.mutation({
      query: ( id ) => ({
        url: `/itineraries/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default itinerariesAPI;
export const {  useDelItineraryMutation } = itinerariesAPI;
