import { gql, useQuery } from "@apollo/client"

import { ICountriesQuery } from "../lib/definitions"

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

export const useCountries = () => {
  const query = gql`
    query {
      countries {
        ${countryFragment}
      }
    }
  `

  return useQuery<ICountriesQuery>(query)
}

export const useCountriesWithFilters = ({
  countryName,
  continentCode,
  currency,
}: {
  countryName: string
  continentCode: string
  currency: string
}) => {
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
