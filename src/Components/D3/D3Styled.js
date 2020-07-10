import styled from 'styled-components'

export const Wrapper = styled.div`
  svg {
    margin: 0rem;
  }
`

export const XAxis = styled.g`
  transform: ${({ height, margin }) =>
    `translateY(${height - margin.bottom}px)`};
`

export const YAxis = styled.g`
  transform: ${({ margin }) => `translateX(${0}px)`};
`
