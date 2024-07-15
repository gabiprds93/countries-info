import { gql, useQuery } from "@apollo/client"

import { COUNTRY_FRAGMENT } from "../lib/constants"
import { ICountryQuery } from "../lib/definitions"

export function useCountry(countryCode: string) {
  const query = gql`
    query ($countryCode: ID!) {
      country(code: $countryCode) {
        ${COUNTRY_FRAGMENT}
      }
    }
  `

  return useQuery<ICountryQuery>(query, {
    variables: { countryCode },
  })
}
