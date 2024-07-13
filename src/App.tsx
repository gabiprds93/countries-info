import { ChangeEventHandler, useEffect, useState } from "react"

import Filter from "./components/Filter"
import { useCountries, useCountriesWithFilters } from "./hooks/countries"
import { useContinents } from "./hooks/useContinents"
import { useFilters } from "./hooks/useFilters"
import { ICurrency } from "./lib/definitions"

function App() {
  const [countryToSearch, setCountryToSearch] = useState("")
  const [currenciesList, setCurrenciesList] = useState<ICurrency[]>()

  const { changeContinent, changeCurrency, filters } = useFilters()
  const { data: continentsData } = useContinents()
  const { data: countriesData } = useCountries()
  const { data: countriesSearched } = useCountriesWithFilters({
    name: countryToSearch,
    continentCode: filters.continentCode,
    currency: filters.currency,
  })

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target
    const formatedValue = value.charAt(0).toUpperCase() + value.slice(1)

    setCountryToSearch(formatedValue)
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
        value={countryToSearch}
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

      <ul>
        {countriesSearched?.countries.map((country) => {
          return (
            <li key={country.code}>{`${country.emoji} ${country.name}`}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
