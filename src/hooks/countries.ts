import { gql, useQuery } from "@apollo/client"

import { ICountriesQuery } from "../lib/definitions"

const countryFragment = `
  code
  name
  emoji
  currency
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

export const useCountriesByName = (name: string) => {
  const query = gql`
    query ($name: String) {
      countries(filter: { name: { regex: $name } }) {
        ${countryFragment}
      }
    }
  `

  return useQuery<ICountriesQuery>(query, { variables: { name } })
}
