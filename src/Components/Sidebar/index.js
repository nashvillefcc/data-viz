import React from 'react'
import { Container, Divider, Dropdown } from 'semantic-ui-react'
import { SidebarStyled } from './SidebarStyled'
import LibraryDropdown from '../LibraryDropdown'
import ChartTypeDropdown from '../ChartTypeDropdown'
import ThemesDropdown from '../ThemeDropdown'
const Sidebar = ({
  selectedLibrary,
  setSelectedLibrary,
  selectedChartType,
  setSelectedChartType
}) => {
  return (
    <SidebarStyled textAlign='left'>
      <section>
        <LibraryDropdown
          selectedLibrary={selectedLibrary}
          setSelectedLibrary={setSelectedLibrary}
        />
        <ChartTypeDropdown
          selectedChartType={selectedChartType}
          setSelectedChartType={setSelectedChartType}
        />
        <ThemesDropdown />
      </section>
    </SidebarStyled>
  )
}

export default Sidebar
