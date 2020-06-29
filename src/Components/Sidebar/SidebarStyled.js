import styled from 'styled-components'
import { Container, Divider, Button } from 'semantic-ui-react'
export const SidebarStyled = styled(Container)`
  width: 18rem !important;
  padding: 0 1rem;
  background-color: pink;
  section {
    display: flex !important;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;
  }
`
