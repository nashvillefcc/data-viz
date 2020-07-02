import React from 'react'
import { Header } from 'semantic-ui-react'
import { ChartWrapper, DisplayedChartStyled } from './DisplayedChartStyled'

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
const DisplayedChart = ({ children }) => (
  <DisplayedChartStyled>
    <Header as='h1'>Title of chart</Header>
    <ChartWrapper>
      <Placeholder />
    </ChartWrapper>
  </DisplayedChartStyled>
)

export default DisplayedChart
