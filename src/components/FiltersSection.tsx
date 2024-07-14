import { Flex, Typography } from "antd"

import SearchCountry from "../components/SearchCountry"
import Filter from "../components/Filter"
import { useContinents } from "../hooks/useContinents"
import { useFilters } from "../hooks/useFilters"
import { IFiltersSectionProps } from "../lib/definitions"

function FiltersSection({ currencies }: IFiltersSectionProps) {
  const { data: continentsData } = useContinents()
  const { changeContinent, changeCurrency, filters } = useFilters()

  return (
    <Flex component="section" gap="large" vertical>
      <SearchCountry />

      <Flex gap="middle" wrap>
        <Flex gap="small" vertical>
          <Typography.Text>Filtrar por Continente</Typography.Text>

          <Filter
            changeOption={changeContinent}
            options={continentsData?.continents}
            optionSelected={filters.continentCode}
          />
        </Flex>

        <Flex gap="small" vertical>
          <Typography.Text>Filtrar por Moneda</Typography.Text>

          <Filter
            changeOption={changeCurrency}
            options={currencies}
            optionSelected={filters.currency}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FiltersSection
