import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICity, IFinalRequest, ITrainsData, IWagonInfo } from "../models/models";

export const studentsNetoservicesApi = createApi({
  reducerPath: 'studentsNetoservices/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://students.netoservices.ru/fe-diplom/',
  }),
  endpoints: build => ({
    fetchCities: build.query<ICity[] | [], string>({
      query: (city: string) => `routes/cities?name=${city}`,
    }),
    fetchDestinations: build.query<ITrainsData, string>({
      query: (query: string) => `routes?${query}`,
    }),
    fetchSeats: build.query<IWagonInfo, { id: string, query: string }>({
      query: ({ id, query }) => `routes/${id}/seats?${query}`,
    }),
    sendData: build.mutation<void, IFinalRequest>({
      query: (data: IFinalRequest) => ({
        url: '/order',
        method: 'POST',
        body: data,
      })
    }),
    subscribe: build.mutation<void, string>({
      query: (email: string) => ({
        url: `/subscribe?email=${email}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    })
  })
})

export const {
  useFetchCitiesQuery,
  useFetchDestinationsQuery,
  useFetchSeatsQuery,
  useSendDataMutation,
  useSubscribeMutation,
} = studentsNetoservicesApi;
