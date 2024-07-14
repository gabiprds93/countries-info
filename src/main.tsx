import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import HomePage from "./pages/Home"
import CountryPage from "./pages/Country"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "country/:countryCode",
    element: <CountryPage />,
  },
])

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          country: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: "Country",
                code: args?.code,
              })
            },
          },
        },
      },
      Country: {
        keyFields: ["code"],
      },
    },
  }),
})

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
