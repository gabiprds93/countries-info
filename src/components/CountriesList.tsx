import { Link } from "react-router-dom"
import { List } from "antd"

import { ICountriesListProps } from "../lib/definitions"

function CountriesList({ countries }: ICountriesListProps) {
  return (
    <section>
      <List
        bordered
        dataSource={countries}
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
