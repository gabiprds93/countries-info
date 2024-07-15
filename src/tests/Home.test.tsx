import { test, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { MemoryRouter } from "react-router-dom"

import HomePage from "../pages/Home"
import { useCountriesWithFilters } from "../hooks/useCountriesWithFilters"
import { mockCountriesData } from "./mocks"

vi.mock("../hooks/useCountriesWithFilters", () => ({
  useCountriesWithFilters: vi.fn(),
}))

beforeEach(() => {
  vi.resetAllMocks()
})

test("Renders Home page", () => {
  useCountriesWithFilters.mockReturnValue(mockCountriesData)

  render(
    <MockedProvider addTypename={false}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </MockedProvider>
  )

  const titleElement = screen.getByText("Listado de Países")
  expect(titleElement).toBeTruthy()
})
