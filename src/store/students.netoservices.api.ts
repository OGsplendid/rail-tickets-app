import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICity, ITrainsData } from "../models/models";

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
  //   fetchCategories: build.query<ICategory[] | [], void>({
  //     query: () => ({
  //       url: 'categories',
  //     })
  //   }),
  //   fetchGoods: build.query<IHit[] | [], string>({
  //     query: (queryString = '') => `items${queryString}`,
  //   }),
  //   fetchProduct: build.query<IProduct, string>({
  //     query: (queryString = '') => `items/${queryString}`,
  //   }),
  //   sendOrder: build.mutation<string | boolean, IOrder>({
  //     query: (cart: IOrder) => ({
  //       url: 'order',
  //       method: 'POST',
  //       body: JSON.stringify(cart),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //   })
  })
})

export const {
  useFetchCitiesQuery,
  useFetchDestinationsQuery,
} = studentsNetoservicesApi;
