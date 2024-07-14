import { Link } from "react-router-dom"

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
      <h1>Países</h1>

      <ul>
        {countriesSearched?.countries.map((country) => {
          return (
            <li key={country.code}>
              <Link to={`country/${country.code}`}>
                {`${country.emoji} ${country.name}`}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CountriesList
