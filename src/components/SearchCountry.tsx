import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import { Flex, Input, Typography } from "antd"
import debounce from "just-debounce-it"

import { useFilters } from "../hooks/useFilters"

function SearchCountry() {
  const [countryName, setCountryName] = useState("")
  const { changeCountry, filters } = useFilters()

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

  useEffect(() => {
    if (filters.countryName) {
      setCountryName(filters.countryName)
    }
  }, [filters.countryName])

  return (
    <Flex gap="small" vertical>
      <Typography.Text>Buscar por país</Typography.Text>

      <Input
        onChange={handleSearch}
        placeholder="Escribir país"
        value={countryName}
      />
    </Flex>
  )
}

export default SearchCountry
