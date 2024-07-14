import { ChangeEventHandler, useCallback, useState } from "react"
import { Input } from "antd"
import debounce from "just-debounce-it"

import { useFilters } from "../hooks/useFilters"

function SearchCountry() {
  const [countryName, setCountryName] = useState("")
  const { changeCountry } = useFilters()

  const debounceSearchCountry = useCallback(
    debounce((search: string) => {
      const splitValues = search.split(" ")
      const capitalize = splitValues.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      })
      const joinValues = capitalize.join(" ")

      changeCountry(joinValues)
    }, 300),
    []
  )

  const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target

    setCountryName(value)
    debounceSearchCountry(value)
  }

  return (
    <Input
      onChange={handleSearch}
      placeholder="Buscar por país"
      value={countryName}
    />
  )
}

export default SearchCountry
