import { create } from "zustand"

import { IStoreFilters } from "../lib/definitions"

export const useFilters = create<IStoreFilters>()((set) => ({
  filters: { continentCode: "", currency: "", countryName: "" },
  changeContinent: (value: string) =>
    set((state) => ({ filters: { ...state.filters, continentCode: value } })),
  changeCurrency: (value: string) =>
    set((state) => ({ filters: { ...state.filters, currency: value } })),
  changeCountry: (value: string) =>
    set((state) => ({ filters: { ...state.filters, countryName: value } })),
}))
