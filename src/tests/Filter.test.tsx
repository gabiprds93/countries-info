import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"

import Filter from "../components/Filter"

test("Renders Filter component", () => {
  const changeOption = (value: string) => {
    console.log(value)
  }
  render(<Filter changeOption={changeOption} optionSelected="" />)
  const textElement = screen.getByText("Seleccionar opción")
  expect(textElement).toBeTruthy()
})
