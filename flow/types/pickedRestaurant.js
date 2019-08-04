// @flow strict

// Array holding Object structure => xx/detail
export type pickedRestaurant = {
  name: string,
  sector: string,
  food: string,
  website: string,
  phone: string,
  address: string,
  times: {
    sunday: [string, string],
    saturday: [string, string],
    tuesday: [string, string],
    friday: [string, string],
    thursday: [string, string],
    wednesday: [string, string],
    monday: [string, string]
  }
}
