interface IContinent {
  code: string
  name: string
}

interface ILanguage {
  code: string
  name: string
}

interface ICountry {
  code: string
  name: string
  emoji: string
  currency: string
  continent: IContinent
  languages: ILanguage[]
  capital?: string
}

export interface ICountriesQuery {
  countries: ICountry[]
}
