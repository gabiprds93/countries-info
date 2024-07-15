import { test, expect } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { MockedProvider } from "@apollo/client/testing"
import { render, screen } from "@testing-library/react"

import CountryPage from "../pages/Country"

test("Renders Country page", () => {
  render(
    <MockedProvider addTypename={false}>
      <MemoryRouter>
        <CountryPage />
      </MemoryRouter>
    </MockedProvider>
  )

  const textElement = screen.getByText("Volver")
  expect(textElement).toBeTruthy()
})
