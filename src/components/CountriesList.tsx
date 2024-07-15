import { useCallback } from "react"
import { Link } from "react-router-dom"
import { List } from "antd"

import { ICountriesListProps, ICountry } from "../lib/definitions"

function CountriesList({ countries }: ICountriesListProps) {
  const renderItem = useCallback(
    (country: ICountry) => (
      <List.Item>
        <Link
          to={`country/${country.code}`}
        >{`${country.emoji} ${country.name}`}</Link>
      </List.Item>
    ),
    []
  )

  return (
    <section>
      <List bordered dataSource={countries} renderItem={renderItem} />
    </section>
  )
}

export default CountriesList
