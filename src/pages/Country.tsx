import { useParams } from "react-router-dom"
import { Descriptions, List, Typography } from "antd"

import { useCountry } from "../hooks/useCountry"
import styles from "../styles/Layout.module.css"

function CountryPage() {
  const params = useParams()
  const { data } = useCountry(params.countryCode ?? "")

  const { emoji, name, code, currencies, continent, languages, capital } =
    data?.country ?? {}

  const items = [
    {
      key: "1",
      label: "Código",
      children: code,
    },
    {
      key: "2",
      label: "Nombre",
      children: name,
    },
    {
      key: "3",
      label: "Monedas",
      children: (
        <List
          dataSource={currencies}
          renderItem={(currency) => <List.Item>{currency}</List.Item>}
        />
      ),
    },
    {
      key: "4",
      label: "Continente",
      children: continent?.name,
    },
    {
      key: "5",
      label: "Idiomas",
      children: (
        <List
          dataSource={languages}
          renderItem={(language) => <List.Item>{language.name}</List.Item>}
        />
      ),
    },
    {
      key: "6",
      label: "Capital",
      children: capital,
    },
  ]

  return (
    <main className={styles.main}>
      <Typography.Title>
        {emoji} {name}
      </Typography.Title>

      <Descriptions bordered items={items} title="Información del país" />
    </main>
  )
}

export default CountryPage
