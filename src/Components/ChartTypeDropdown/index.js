import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const types = [
  { key: 'bar', text: 'bar', value: 'bar' },
  { key: 'radial', text: 'radial', value: 'radial' },
  { key: 'tree', text: 'tree', value: 'tree' },
  { key: 'scatterplot', text: 'scatterplot', value: 'scatterplot' },
  { key: 'pie', text: 'pie', value: 'pie' }
]

const ChartTypeDropdown = () => (
  <Dropdown placeholder='Type' fluid multiple selection options={types} />
)

export default ChartTypeDropdown
