import { Flex, Typography } from "antd"

import FiltersSection from "../components/FiltersSection"
import CountriesList from "../components/CountriesList"
import { useCountriesWithFilters } from "../hooks/useCountriesWithFilters"
import { useFilters } from "../hooks/useFilters"
import { useCurrencies } from "../hooks/useCurrencies"
import styles from "../styles/Layout.module.css"

function HomePage() {
  const { filters } = useFilters()
  const { data: countriesSearched } = useCountriesWithFilters({
    countryName: filters.countryName,
    continentCode: filters.continentCode,
    currency: filters.currency,
  })
  const { currenciesList } = useCurrencies(countriesSearched)

  return (
    <main className={styles.main}>
      <Typography.Title>Listado de Países</Typography.Title>

      <Flex gap="large" vertical>
        <FiltersSection currencies={currenciesList} />

        <CountriesList countries={countriesSearched?.countries} />
      </Flex>
    </main>
  )
}

export default HomePage
