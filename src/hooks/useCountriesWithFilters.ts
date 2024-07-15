import { gql, useQuery } from "@apollo/client"

import { ICountriesQuery, IFilters } from "../lib/definitions"
import { COUNTRY_FRAGMENT } from "../lib/constants"

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
        ${COUNTRY_FRAGMENT}
      }
    }
  `

  return useQuery<ICountriesQuery>(query, {
    variables: { countryName, continentCode, currency },
  })
}
