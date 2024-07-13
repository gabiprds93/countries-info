import { gql, useQuery } from "@apollo/client"

import { IContinentsQuery } from "../lib/definitions"

export const useContinents = () => {
  const query = gql`
    query {
      continents {
        code
        name
      }
    }
  `

  return useQuery<IContinentsQuery>(query)
}
