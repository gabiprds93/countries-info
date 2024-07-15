interface IContinent {
  code: string
  name: string
}

interface ILanguage {
  code: string
  name: string
}

export interface ICountry {
  code: string
  name: string
  emoji: string
  currencies: string[]
  continent: IContinent
  languages: ILanguage[]
  capital?: string
}

export interface ICountriesQuery {
  countries: ICountry[]
}

export interface ICountryQuery {
  country: ICountry
}

export interface IContinentsQuery {
  continents: IContinent[]
}

export interface IFilters {
  continentCode: string
  currency: string
  countryName: string
}

export interface IStoreFilters {
  filters: IFilters
  changeContinent: (value: string) => void
  changeCurrency: (value: string) => void
  changeCountry: (value: string) => void
}

export interface ICurrency {
  code: string
  name: string
}

export interface IFilterProps {
  changeOption: (value: string) => void
  options?: IContinent[] | ICurrency[]
  optionSelected: string
}

export interface IFiltersSectionProps {
  currencies: ICurrency[]
}

export interface ICountriesListProps {
  countries?: ICountry[]
}
