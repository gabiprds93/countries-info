import { useEffect, useState } from "react"
import { Flex, Typography } from "antd"

import FiltersSection from "../components/FiltersSection"
import CountriesList from "../components/CountriesList"
import { useCountries } from "../hooks/countries"
import { ICurrency } from "../lib/definitions"
import styles from "../styles/Layout.module.css"

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
    <main className={styles.main}>
      <Typography.Title>Listado de Países</Typography.Title>

      <Flex gap="large" vertical>
        <FiltersSection currencies={currenciesList} />

        <CountriesList />
      </Flex>
    </main>
  )
}

export default HomePage
