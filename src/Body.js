import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const BodyWrapper = styled.div`
  flex: 0.8;
  color: white;
  height: 100vh;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
`

function Body({ spotify }) {
  return (
    <BodyWrapper>
      <Header spotify={spotify} />
    </BodyWrapper>
  )
}

export default Body
