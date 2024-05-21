import { createSlice } from "@reduxjs/toolkit/react"
import { IDestinationsQuery, IFinalRequest, ITrainInfo } from "../models/models";

interface IInitialState {
  stage: number,
  destinationsQuery: IDestinationsQuery,
  chosenDestination: ITrainInfo | undefined,
  totalSum: 0,
  passengersQuantity: number,
  seatsQuantity: {
    departure: number,
    arrival: number,
  },
  passengersTypes: {
    adults: number,
    children?: number,
    kids?: number,
  }
  finalRequest: IFinalRequest,
}

const initialDestinationsQueryState = {
  from_city_id: '',
  to_city_id: '',
  date_start: '',
  date_end: '',
  // date_start_arrival: '',
  // date_end_arrival: '',
  have_first_class: false,
  have_second_class: false,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  is_express: false,
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
  limit: '5',
  offset: '',
  sort: '',
}

const initialState: IInitialState = {
  stage: 0,
  destinationsQuery: initialDestinationsQueryState,
  chosenDestination: undefined,
  totalSum: 0,
  passengersQuantity: 0,
  seatsQuantity: {
    departure: 0,
    arrival: 0,
  },
  passengersTypes: {
    adults: 0,
    children: 0,
    kids: 0,
  },
  finalRequest: {}
}

const studentsNetoservicesSlice = createSlice({
  name: 'shoesShop',
  initialState,
  reducers: {
    setStage(state, action) {
      state.stage = action.payload;
    },
    setDestinationQuery(state, action) {
      for (const key in action.payload) {
        state.destinationsQuery[key] = action.payload[key];
      }
    },
    resetDestinationQuery(state) {
      state.destinationsQuery = initialDestinationsQueryState;
    },
    setChosenDestination(state, action) {
      state.chosenDestination = action.payload;
    },
    setTotalSum(state, action) {
      state.totalSum += action.payload;
    },
    setPassengersQuantity(state, action) {
      state.passengersQuantity = action.payload;
    },
    setSeatsQuantity(state, action) {
      if (!action.payload.departure) {
        state.seatsQuantity.arrival = action.payload.number;
      } else {
        state.seatsQuantity.departure = action.payload.number;
      }
    },
    resetSeatsQuantity(state) {
      state.seatsQuantity = {
        departure: 0,
        arrival: 0,
      };
    },
    setDirection(state) {
      if (state.chosenDestination) {
        state.finalRequest.departure = {};
        state.finalRequest.departure.route_direction_id = state.chosenDestination?.departure._id;
        if (state.chosenDestination.arrival) {
          state.finalRequest.arrival = {};
          state.finalRequest.arrival.route_direction_id = state.chosenDestination?.arrival._id;
        }
      }
    },
    setSeats(state, action) {
      if (!action.payload.from && state.finalRequest.departure) {
        if (!state.finalRequest.departure.seats) {
          state.finalRequest.departure.seats = [];
        }
        state.finalRequest.departure.seats = [...state.finalRequest.departure.seats, ...action.payload.chosen];
      } else if (action.payload.from && state.finalRequest.arrival) {
        if (!state.finalRequest.arrival.seats) {
          state.finalRequest.arrival.seats = [];
        }
          state.finalRequest.arrival.seats = [...state.finalRequest.arrival.seats, ...action.payload.chosen];
        }
    },
    setPersonInfo(state, action) {
      let flag = true;
      state.finalRequest.departure?.seats?.forEach((seat) => {
        if (!seat.person_info && flag) {
          flag = false;
          seat.person_info = action.payload;
          if (state.passengersTypes.kids && action.payload.is_adult) {
            seat.include_children_seat = true;
            state.passengersTypes.kids -= 1;
          } else {
            seat.include_children_seat = false;
          }
          if (!action.payload.is_adult) {
            seat.is_child = true;
          } else {
            seat.is_child = false;
          }
        }
      })
      if (!state.finalRequest.arrival) return;
      flag = true;
      state.finalRequest.arrival?.seats?.forEach((seat) => {
        if (!seat.person_info && flag) {
          flag = false;
          seat.person_info = action.payload;
          if (state.passengersTypes.kids && action.payload.is_adult) {
            seat.include_children_seat = true;
            state.passengersTypes.kids -= 1;
          } else {
            seat.include_children_seat = false;
          }
          if (!action.payload.is_adult) {
            seat.is_child = true;
          } else {
            seat.is_child = false;
          }
        }
      })
    },
    setUser(state, action) {
      state.finalRequest.user = action.payload;
    },
    setPassengersTypes(state, action) {
      state.passengersTypes.adults += action.payload.adults;
      if (action.payload.children) state.passengersTypes.children += action.payload.children;
      if (action.payload.kids) state.passengersTypes.kids += action.payload.kids;
    },
    resetPassengersTypes(state) {
      state.passengersTypes = {
        adults: 0,
        children: 0,
        kids: 0,
      };
    },
    resetFinalDestinationData(state) {
      state.finalRequest = {};
      state.passengersQuantity = 0;
      state.seatsQuantity = {
        departure: 0,
        arrival: 0,
      };
    },
  }
})

export const studentsNetoservicesActions = studentsNetoservicesSlice.actions;
export const studentsNetoservicesReducer = studentsNetoservicesSlice.reducer;
