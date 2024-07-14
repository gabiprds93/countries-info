import { useParams } from "react-router-dom"

import { useCountry } from "../hooks/useCountry"

function CountryPage() {
  const params = useParams()
  const { data } = useCountry(params.countryCode ?? "")

  const { emoji, name, code, currencies, continent, languages, capital } =
    data?.country ?? {}

  return (
    <main>
      <h1>
        {emoji} {name}
      </h1>

      <p>Código: {code}</p>

      <p>
        <span>Monedas:</span>

        <ul>
          {currencies?.map((currency) => {
            return <li key={currency}>{currency}</li>
          })}
        </ul>
      </p>

      <p>Continente: {continent?.name}</p>

      <p>
        <span>Idiomas:</span>

        <ul>
          {languages?.map((language) => {
            return <li key={language.code}>{language.name}</li>
          })}
        </ul>
      </p>

      <p>Capital: {capital}</p>
    </main>
  )
}

export default CountryPage
