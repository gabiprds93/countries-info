import { gql, useQuery } from "@apollo/client"

import { ICountriesQuery } from "../lib/definitions"

export const useCountries = () => {
  const query = gql`
    query {
      countries {
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
      }
    }
  `

  return useQuery<ICountriesQuery>(query)
}
