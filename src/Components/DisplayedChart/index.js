import React from 'react'
import { Header } from 'semantic-ui-react'
import { ChartWrapper, DisplayedChartStyled } from './DisplayedChartStyled'
import D3Charts from '../D3'

// add imported library objects to charts
const charts = {
  d3: D3Charts,
  chartjs: null,
  googleCharts: null
}

/**
 * charts will be displayed based on selectedChartType and selectedLibrary
 * @param selectedLibrary string
 * @param selectedChartType string
 */
const DisplayedChart = ({ selectedLibrary, selectedChartType }) => {
  return (
    <DisplayedChartStyled>
      <Header as='h1'>D3: bar</Header>
      <ChartWrapper>
        {charts[selectedLibrary] &&
        charts[selectedLibrary][selectedChartType] ? (
          charts[selectedLibrary][selectedChartType]
        ) : (
          <h1>no chart found</h1>
        )}
      </ChartWrapper>
    </DisplayedChartStyled>
  )
}

export default DisplayedChart
