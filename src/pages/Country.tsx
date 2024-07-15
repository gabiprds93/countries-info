import { Link, useParams } from "react-router-dom"
import { Descriptions, List, Typography } from "antd"

import { useCountry } from "../hooks/useCountry"
import ArrowLeft from "../icons/ArrowLeft"
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
      <Link
        to="/"
        style={{
          alignItems: "center",
          color: "rgba(0, 0, 0, 0.45)",
          display: "flex",
          textDecoration: "none",
        }}
      >
        <ArrowLeft />

        <Typography.Text type="secondary" style={{ fontSize: 16 }}>
          Volver
        </Typography.Text>
      </Link>

      <Typography.Title>
        {emoji} {name}
      </Typography.Title>

      <Descriptions bordered items={items} title="Información del país" />
    </main>
  )
}

export default CountryPage
