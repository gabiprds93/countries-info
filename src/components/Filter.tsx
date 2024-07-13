import { IFilterProps } from "../lib/definitions"

function Filter({ changeOption, options, optionSelected }: IFilterProps) {
  return (
    <select
      onChange={(event) => changeOption(event.target.value)}
      value={optionSelected}
    >
      <option value="">Seleccionar</option>

      {options?.map((option) => {
        return (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        )
      })}
    </select>
  )
}

export default Filter
