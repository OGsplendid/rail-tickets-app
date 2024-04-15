import { configureStore } from "@reduxjs/toolkit";
import { studentsNetoservicesApi } from "./students.netoservices.api";
import { studentsNetoservicesReducer } from "./students.netoservices.slice";

export const store = configureStore({
  reducer: {
    [studentsNetoservicesApi.reducerPath]: studentsNetoservicesApi.reducer,
    railTickets: studentsNetoservicesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsNetoservicesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
