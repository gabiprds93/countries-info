import { ChangeEventHandler, useEffect, useState } from "react"

import Filter from "./components/Filter"
import CountriesList from "./components/CountriesList"
import { useCountries } from "./hooks/countries"
import { useContinents } from "./hooks/useContinents"
import { useFilters } from "./hooks/useFilters"
import { ICurrency } from "./lib/definitions"

function App() {
  const [currenciesList, setCurrenciesList] = useState<ICurrency[]>()

  const { changeContinent, changeCurrency, changeCountry, filters } =
    useFilters()
  const { data: continentsData } = useContinents()
  const { data: countriesData } = useCountries()

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target
    const formatedValue = value.charAt(0).toUpperCase() + value.slice(1)

    changeCountry(formatedValue)
  }

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
      <input
        onChange={handleSearch}
        placeholder="Escribir nombre del país"
        type="text"
        value={filters.countryName}
      />

      <Filter
        changeOption={changeContinent}
        options={continentsData?.continents}
        optionSelected={filters.continentCode}
      />

      <Filter
        changeOption={changeCurrency}
        options={currenciesList}
        optionSelected={filters.currency}
      />

      <CountriesList />
    </main>
  )
}

export default App
