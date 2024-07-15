import { useEffect, useState } from "react"

import { ICountriesQuery, ICurrency } from "../lib/definitions"

export function useCurrencies(countriesSearched?: ICountriesQuery) {
  const [currenciesList, setCurrenciesList] = useState<ICurrency[]>([])

  useEffect(() => {
    let allCurrencies: string[] = []
    countriesSearched?.countries.forEach((country) => {
      allCurrencies = country.currencies.concat(allCurrencies)
    })

    const singleCurrencies = new Set(allCurrencies)
    const currenciesArray = [...singleCurrencies]
    const formatedCurrencies = currenciesArray
      .filter((currency) => currency)
      .map((currency) => {
        return {
          code: currency,
          name: currency,
        }
      })

    setCurrenciesList(formatedCurrencies)
  }, [countriesSearched, currenciesList])

  return { currenciesList }
}
