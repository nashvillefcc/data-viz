import React from 'react'
import { Header } from 'semantic-ui-react'
import { DisplayedChartStyled } from './DisplayedChartStyled'

const Placeholder = () => {
  //inline styled only for placeholder
  return (
    <div
      style={{
        height: '80%',
        width: '80%',
        backgroundColor: 'teal',
        textAlign: 'center',
        alignSelf: 'center'
      }}
    >
      placeholder
    </div>
  )
}
const DisplayedChart = () => (
  <DisplayedChartStyled>
    <Header as='h1'>Title of chart</Header>
    <Placeholder />
  </DisplayedChartStyled>
)

export default DisplayedChart
