/* eslint-disable max-len */

import React from 'react'
import { Container, Divider, Button } from 'semantic-ui-react'

import { LayoutWrapper } from './LayoutStyled'
import DisplayedChart from '../DisplayedChart'


const Layout = () => {
  const defaultLibrary = 'd3'
  const defaultChartType = 'bar'

  return (
    <LayoutWrapper>
      <DisplayedChart
        selectedLibrary={defaultLibrary}
        selectedChartType={defaultChartType}
      />
    </LayoutWrapper>
  )
}

export default Layout
