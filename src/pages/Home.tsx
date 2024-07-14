import { useEffect, useState } from "react"

import FiltersSection from "../components/FiltersSection"
import CountriesList from "../components/CountriesList"
import { useCountries } from "../hooks/countries"
import { ICurrency } from "../lib/definitions"

function HomePage() {
  const [currenciesList, setCurrenciesList] = useState<ICurrency[]>([])
  const { data: countriesData } = useCountries()

  useEffect(() => {
    let allCurrencies: string[] = []
    countriesData?.countries.forEach((country) => {
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
  }, [countriesData])

  return (
    <main>
      <FiltersSection currencies={currenciesList} />

      <CountriesList />
    </main>
  )
}

export default HomePage
