import React from 'react'
import { Container, Divider, Dropdown } from 'semantic-ui-react'
import { SidebarStyled } from './SidebarStyled'
import LibraryDropdown from '../LibraryDropdown'
import ChartTypeDropdown from '../ChartTypeDropdown'
import ThemesDropdown from '../ThemeDropdown'
const Sidebar = () => (
  <SidebarStyled textAlign='left'>
    <section>
      <LibraryDropdown />
      <ChartTypeDropdown />
      <ThemesDropdown />
    </section>
  </SidebarStyled>
)

export default Sidebar
