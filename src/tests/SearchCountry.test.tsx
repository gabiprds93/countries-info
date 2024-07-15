import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import SearchCountry from "../components/SearchCountry"

test("Renders SearchCountry component", () => {
  render(<SearchCountry />)
  const inputLabel = screen.getByLabelText("Buscar por país")
  expect(inputLabel).toBeTruthy()
})
