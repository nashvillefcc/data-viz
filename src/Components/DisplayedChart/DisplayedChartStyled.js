import styled from 'styled-components'
import { Container, Divider, Button } from 'semantic-ui-react'

export const DisplayedChartStyled = styled(Container)`
  display: flex !important;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 2rem;
  background-color: yellow;
`

export const TitleWrapper = styled.div`
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  .libraryOptions{
    text-decoration: underline;
  }
  .chartOptions{
    text-decoration: underline;
  }
`

export const DropdownWrapper = styled.div`
  width: 15%;
  position: relative;
  top: 0.5rem;
`

export const ChartWrapper = styled.div`
  height: 80%;
  width: 80%;
  background-color: white;
  align-self: center;
`