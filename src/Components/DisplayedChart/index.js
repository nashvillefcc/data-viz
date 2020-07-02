import React from 'react'
import { Header } from 'semantic-ui-react'
import { ChartWrapper, DisplayedChartStyled } from './DisplayedChartStyled'
import D3Charts from '../D3'
const Placeholder = () => {
  //inline styled only for placeholder
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      placeholder
    </div>
  )
}
const charts = {
  d3: D3Charts
}
const DisplayedChart = ({ children, selectedLibrary, selectedChartType }) => {
  return (
    <DisplayedChartStyled>
      <Header as='h1'>Title of chart</Header>
      <ChartWrapper>
        {charts[selectedLibrary] ? (
          charts[selectedLibrary][selectedChartType]
        ) : (
          <p>no chart found</p>
        )}
      </ChartWrapper>
    </DisplayedChartStyled>
  )
}

export default DisplayedChart
