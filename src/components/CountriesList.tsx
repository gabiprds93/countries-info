import { Link } from "react-router-dom"
import { List, Typography } from "antd"

import { useCountriesWithFilters } from "../hooks/countries"
import { useFilters } from "../hooks/useFilters"

function CountriesList() {
  const { filters } = useFilters()
  const { data: countriesSearched } = useCountriesWithFilters({
    countryName: filters.countryName,
    continentCode: filters.continentCode,
    currency: filters.currency,
  })

  return (
    <section>
      <Typography.Title>Listado de Países</Typography.Title>

      <List
        bordered
        dataSource={countriesSearched?.countries}
        renderItem={(item) => (
          <List.Item>
            <Link to={`country/${item.code}`}>
              {`${item.emoji} ${item.name}`}
            </Link>
          </List.Item>
        )}
      />
    </section>
  )
}

export default CountriesList
