import { ChangeEventHandler, useEffect, useState } from "react"

import Filter from "./components/Filter"
import { useCountriesWithFilters } from "./hooks/countries"
import { useContinents } from "./hooks/useContinents"
import { useFilters } from "./hooks/useFilters"
import { ICountriesQuery } from "./lib/definitions"

function App() {
  const [countryToSearch, setCountryToSearch] = useState("")
  const [countriesToShow, setCountriesToShow] = useState<ICountriesQuery>()

  const { changeContinent, filters } = useFilters()
  const { data: continentsData } = useContinents()
  const { data: countriesSearched } = useCountriesWithFilters({
    name: countryToSearch,
    continentCode: filters.continentCode,
  })

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target
    const formatedValue = value.charAt(0).toUpperCase() + value.slice(1)

    setCountryToSearch(formatedValue)
  }

  useEffect(() => {
    setCountriesToShow(countriesSearched)
  }, [countriesSearched])

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

      <ul>
        {countriesToShow?.countries.map((country) => {
          return (
            <li key={country.code}>{`${country.emoji} ${country.name}`}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
