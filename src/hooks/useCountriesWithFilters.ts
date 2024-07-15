import { gql, useQuery } from "@apollo/client"

import { ICountriesQuery, IFilters } from "../lib/definitions"

const countryFragment = `
  code
  name
  emoji
  currencies
  continent {
    code
    name
  }
  languages {
    code
    name
  }
  capital
`

export function useCountriesWithFilters({
  countryName,
  continentCode,
  currency,
}: IFilters) {
  const query = gql`
    query ($countryName: String, $continentCode: String, $currency: String) {
      countries(filter: {
        name: { regex: $countryName },
        continent: {regex: $continentCode},
        currency: {regex: $currency}
      }) {
        ${countryFragment}
      }
    }
  `

  return useQuery<ICountriesQuery>(query, {
    variables: { countryName, continentCode, currency },
  })
}
