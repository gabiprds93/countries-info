import { test, expect } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"

import CountriesList from "../components/CountriesList"
import { mockCountriesData } from "./mocks"

test("Renders CountriesList component", () => {
  render(
    <MemoryRouter>
      <CountriesList countries={mockCountriesData.data.countries} />
    </MemoryRouter>
  )
  const textElement = screen.getByText(/Canada/)
  expect(textElement).toBeTruthy()
})
