// import { test, expect, vi, beforeEach, MockedFunction } from "vitest"
// import { cleanup, render, screen } from "@testing-library/react"
// import userEvent from "@testing-library/user-event"
// import { MockedProvider } from "@apollo/client/testing"
// import { MemoryRouter } from "react-router-dom"

// import HomePage from "../pages/Home"
// import { useCountriesWithFilters } from "../hooks/useCountriesWithFilters"
// import { useCurrencies } from "../hooks/useCurrencies"
// import { mockCountriesData, mockCurrenciesData, mockPeruData } from "./mocks"

// vi.mock("../hooks/useCountriesWithFilters", () => ({
//   useCountriesWithFilters: vi.fn(),
// }))

// vi.mock("../hooks/useCurrencies", () => ({
//   useCurrencies: vi.fn(),
// }))

// const mockUseCountriesQuery = useCountriesWithFilters as MockedFunction<
//   typeof useCountriesWithFilters
// >
// const mockUseCurrenciesQuery = useCurrencies as MockedFunction<
//   typeof useCurrencies
// >

// beforeEach(() => {
//   cleanup()
//   vi.resetAllMocks()
// })

// test("Renders Home page", () => {
//   useCountriesWithFilters.mockReturnValue(mockCountriesData)
//   mockUseCurrenciesQuery.mockReturnValue(mockCurrenciesData)

//   render(
//     <MockedProvider addTypename={false}>
//       <MemoryRouter>
//         <HomePage />
//       </MemoryRouter>
//     </MockedProvider>
//   )

//   const titleElement = screen.getByText("Listado de Países")
//   expect(titleElement).toBeTruthy()
// })

// test("Input works as expected", async () => {
//   useCountriesWithFilters.mockReturnValue(mockCountriesData)
//   mockUseCurrenciesQuery.mockReturnValue(mockCurrenciesData)

//   const user = userEvent.setup()
//   render(
//     <MockedProvider addTypename={false}>
//       <MemoryRouter>
//         <HomePage />
//       </MemoryRouter>
//     </MockedProvider>
//   )

//   const inputNode = screen.getByPlaceholderText("Escribir país")
//   await user.type(inputNode, "Pe")
//   useCountriesWithFilters.mockReturnValue(mockPeruData)
//   const result = await screen.findByText("🇵🇪 Peru")
//   expect(result).toBeTruthy()
// })
