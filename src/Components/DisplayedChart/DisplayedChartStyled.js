import styled from 'styled-components'
import { Container, Divider, Button } from 'semantic-ui-react'

export const DisplayedChartStyled = styled(Container)`
  display: flex !important;
  height: 100vh;
  width: 100vw !important;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  background-color: #b8e8ff;
`

export const TitleWrapper = styled.div`
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  .libraryOptions {
    text-decoration: underline;
  }
  .chartOptions {
    text-decoration: underline;
  }
`

export const DropdownWrapper = styled.div`
  width: 15%;
  position: relative;
  top: 0.5rem;
  min-width: 10rem;
`

export const ChartWrapper = styled.div`
  background-color: white;
  align-self: center;
`
