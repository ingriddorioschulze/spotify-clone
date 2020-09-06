import React from 'react'
import styled from 'styled-components'

const BodyWrapper = styled.div`
  flex: 0.8;
  color: white;
  height: 100vh;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
`

function Body() {
  return (
    <BodyWrapper>
      <div>Body</div>
    </BodyWrapper>
  )
}

export default Body
