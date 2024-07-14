import { Select } from "antd"

import { IFilterProps } from "../lib/definitions"

function Filter({ changeOption, options, optionSelected }: IFilterProps) {
  const formatOptions = () => {
    const selectedOption = [{ value: "", label: "Seleccionar opción" }]
    const formatedOptions = options?.map((option) => {
      return { value: option.code, label: option.name }
    })

    return selectedOption.concat(formatedOptions ?? [])
  }

  return (
    <Select
      onChange={(value) => changeOption(value)}
      optionFilterProp="label"
      options={formatOptions()}
      showSearch
      style={{ width: 200 }}
      value={optionSelected}
    />
  )
}

export default Filter
