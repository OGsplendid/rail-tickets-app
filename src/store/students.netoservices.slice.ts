import { createSlice } from "@reduxjs/toolkit/react"
import { IDestinationsQuery } from "../models/models";

interface IInitialState {
  stage: number,
  destinationsQuery: IDestinationsQuery,
}

const initialState: IInitialState = {
  stage: 0,
  destinationsQuery: {
    from_city_id: '',
    to_city_id: '',
    date_start: '',
    date_end: '',
    date_start_arrival: '',
    date_end_arrival: '',
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
    price_from: '',
    price_to: '',
    start_departure_hour_from: '',
    start_departure_hour_to: '',
    start_arrival_hour_from: '',
    start_arrival_hour_to: '',
    end_departure_hour_from: '',
    end_departure_hour_to: '',
    end_arrival_hour_from: '',
    end_arrival_hour_to: '',
    limit: '20',
    offset: '',
    sort: '',
  },
}

const studentsNetoservicesSlice = createSlice({
  name: 'shoesShop',
  initialState,
  reducers: {
    setStage(state, action) {
      state.stage = action.payload;
    },
    setDestinationQuery(state, action) {
      for (const key in state.destinationsQuery) {
        if (action.payload[key]) {
          state.destinationsQuery[key] = action.payload[key];
        }
      }
    },
    // setCat(state, action) {
    //   state.catId = action.payload;
    // },
    // setCurrentQuery(state, action) {
    //   state.currentQuery = action.payload;
    // },
    // addToCart(state: { cart: ICartProduct[] }, action: { payload: ICartProduct }) {
    //   const productInCart = state.cart.find((product) => product.product?.id === action.payload.product?.id
    //     && product.checkedSize === action.payload.checkedSize);
    //   if (productInCart) {
    //     productInCart.quantity += action.payload.quantity;
    //     productInCart.priceSum += action.payload.priceSum;
    //   } else {
    //     state.cart.push(action.payload);
    //   }
    //   localStorage.setItem('cart', JSON.stringify(state.cart));
    // },
    // removeFromCart(state, action) {
    //   state.cart = state.cart.filter((product) => product?.product?.id !== action.payload);
    //   localStorage.setItem('cart', JSON.stringify(state.cart));
    // }
  }
})

export const studentsNetoservicesActions = studentsNetoservicesSlice.actions;
export const studentsNetoservicesReducer = studentsNetoservicesSlice.reducer;
