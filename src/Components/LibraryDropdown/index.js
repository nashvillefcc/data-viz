import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const libraries = [
  { key: 'chartjs', text: 'Chartjs', value: 'chartjs' },
  { key: 'd3', text: 'D3', value: 'd3' },
  { key: 'google-charts', text: 'Google Charts', value: 'google-charts' }
]

const LibraryDropdown = () => (
  <Dropdown
    placeholder='Library'
    fluid
    multiple
    selection
    options={libraries}
  />
)

export default LibraryDropdown
