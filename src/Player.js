import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

const PlayerBody = styled.div`
  display: flex;
`

function Player({ spotify }) {
  return (
    <>
      <PlayerBody>
        <Sidebar />
        <Body spotify={spotify} />
      </PlayerBody>
      <Footer />
    </>
  )
}

export default Player
