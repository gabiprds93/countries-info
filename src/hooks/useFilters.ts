import { create } from "zustand"

import { IStoreFilters } from "../lib/definitions"

export const useFilters = create<IStoreFilters>()((set) => ({
  filters: { continentCode: "" },
  changeContinent: (value: string) =>
    set((state) => ({ filters: { ...state.filters, continentCode: value } })),
}))
