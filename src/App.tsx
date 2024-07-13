import { useCountries } from "./hooks/countries"

function App() {
  const { data } = useCountries()

  return (
    <main>
      <ul>
        {data?.countries.map((country) => {
          return (
            <li key={country.code}>{`${country.emoji} ${country.name}`}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
