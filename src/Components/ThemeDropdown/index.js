import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const themes = [
  { key: 'light', text: 'Light', value: 'light' },
  { key: 'dark', text: 'Dark', value: 'dark' }
]

const ThemesDropdown = () => (
  <Dropdown placeholder='Themes' fluid selection options={themes} />
)

export default ThemesDropdown
