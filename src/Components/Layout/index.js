/* eslint-disable max-len */

import React from 'react'
import { Container, Divider, Button } from 'semantic-ui-react'

import Sidebar from '../Sidebar'
import { LayoutWrapper } from './LayoutStyled'
import DisplayedChart from '../DisplayedChart'

const Layout = () => (
  <LayoutWrapper style={{ display: 'flex' }}>
    <Sidebar />
    <DisplayedChart />
  </LayoutWrapper>
)

export default Layout
