import { ChangeEventHandler, useState } from "react"

import { useCountriesByName } from "./hooks/countries"

function App() {
  const [countryToSearch, setCountryToSearch] = useState("")
  const { data: countriesSearched } = useCountriesByName(countryToSearch)

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target
    const formatedValue = value.charAt(0).toUpperCase() + value.slice(1)

    setCountryToSearch(formatedValue)
  }

  return (
    <main>
      <input
        onChange={handleSearch}
        placeholder="Escribir nombre del país"
        type="text"
        value={countryToSearch}
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
