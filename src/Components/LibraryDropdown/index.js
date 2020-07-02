import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const libraries = [
  { key: 'chartjs', text: 'Chartjs', value: 'chartjs' },
  { key: 'd3', text: 'D3', value: 'd3' },
  { key: 'google-charts', text: 'Google Charts', value: 'Google Charts' }
]

const LibraryDropdown = ({ selectedLibrary, setSelectedLibrary }) => {
  const onChangeHandler = (e, { value }) => setSelectedLibrary(value)
  return (
    <Dropdown
      value={selectedLibrary}
      fluid
      selection
      options={libraries}
      onChange={onChangeHandler}
    />
  )
}

export default LibraryDropdown
