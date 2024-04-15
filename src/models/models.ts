// cities for dropdowns

export interface ICity {
  _id: number,
  name: string,
}

export interface IDestinationsQuery {
  [key: string]: string | boolean,
  from_city_id: string,
  to_city_id: string,
  date_start: string,
  date_end: string,
  date_start_arrival: string,
  date_end_arrival: string,
  have_first_class: boolean,
  have_second_class: boolean,
  have_third_class: boolean,
  have_fourth_class: boolean,
  have_wifi: boolean,
  have_air_conditioning: boolean,
  have_express: boolean,
  price_from: string,
  price_to: string,
  start_departure_hour_from: string,
  start_departure_hour_to: string,
  start_arrival_hour_from: string,
  start_arrival_hour_to: string,
  end_departure_hour_from: string,
  end_departure_hour_to: string,
  end_arrival_hour_from: string,
  end_arrival_hour_to: string,
  limit: string,
  offset: string,
  sort: string,
}

// train info

export interface ITrainsData {
  total_count: number,
  items: ITrainInfo[],
}

export interface ITrainInfo {
  have_first_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_fourth_class: boolean
  have_wifi: boolean
  have_air_conditioning: boolean
  is_express: boolean
  min_price: number
  available_seats: number
  available_seats_info: AvailableSeatsInfo
  departure: ArrivalDeparture
  arrival: ArrivalDeparture
}

export interface AvailableSeatsInfo {
  first?: number
  second?: number
  third?: number
  fourth?: number
}

export interface ArrivalDeparture {
  _id: string
  have_first_class: boolean
  have_second_class: boolean
  have_third_class: boolean
  have_fourth_class: boolean
  have_wifi: boolean
  have_air_conditioning: boolean
  is_express: boolean
  min_price: number
  duration: number
  available_seats: number
  available_seats_info: AvailableSeatsInfo
  train: Train
  from: FromTo
  to: FromTo
  price_info: PriceInfo
}

export interface Train {
  _id: string
  name: string
}

export interface FromTo {
  railway_station_name: string
  city: City
  datetime: number
}

export interface City {
  _id: string
  name: string
}

export interface PriceInfo {
  first?: Price
  second?: Price
  third?: Price
  fourth?: Price
}

export interface Price {
  price?: number
  top_price?: number
  bottom_price?: number
}
