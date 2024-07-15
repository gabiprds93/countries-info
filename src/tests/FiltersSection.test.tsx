import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"

import FiltersSection from "../components/FiltersSection"
import { mockCurrenciesData } from "./mocks"

test("Renders FiltersSection component", () => {
  render(
    <MockedProvider addTypename={false}>
      <FiltersSection currencies={mockCurrenciesData} />
    </MockedProvider>
  )
  const textElement = screen.getByText("Filtrar por Continente")
  expect(textElement).toBeTruthy()
})
