/* eslint-disable max-len */

import React, { useState } from 'react'
import { Container, Divider, Button } from 'semantic-ui-react'

import Sidebar from '../Sidebar'
import { LayoutWrapper } from './LayoutStyled'
import DisplayedChart from '../DisplayedChart'

const Layout = () => {
  const defaultLibrary = 'd3'
  const defaultChartType = 'bar'
  const [selectedLibrary, setSelectedLibrary] = useState(defaultLibrary)
  const [selectedChartType, setSelectedChartType] = useState(defaultChartType)
  return (
    <LayoutWrapper>
      <Sidebar
        selectedLibrary={selectedLibrary}
        setSelectedLibrary={setSelectedLibrary}
        selectedChartType={selectedChartType}
        setSelectedChartType={setSelectedChartType}
      />
      <DisplayedChart
        selectedLibrary={selectedLibrary}
        selectedChartType={selectedChartType}
      />
    </LayoutWrapper>
  )
}

export default Layout
