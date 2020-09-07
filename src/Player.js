import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const PlayerWrapper = styled.div``
const PlayerBody = styled.div`
  display: flex;
`

function Player({ spotify }) {
  return (
    <PlayerWrapper>
      <PlayerBody>
        <Sidebar />
        <Body spotify={spotify} />
      </PlayerBody>
      <Footer />
    </PlayerWrapper>
  )
}

export default Player
