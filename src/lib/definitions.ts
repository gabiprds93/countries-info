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

export interface IContinentsQuery {
  continents: IContinent[]
}

interface IFilters {
  continentCode: string
}

export interface IStoreFilters {
  filters: IFilters
  changeContinent: (value: string) => void
}

export interface IFilterProps {
  changeOption: (value: string) => void
  options?: IContinent[]
  optionSelected: string
}
