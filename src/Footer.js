import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import { Grid, Slider } from '@material-ui/core'

const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
`
const FooterLeft = styled.div`
  flex: 0.3;
`
const FooterCenter = styled.div`
  flex: 0.4;
  margin: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`
const FooterRight = styled.div`
  flex: 0.3;
  color: white;

  .continuous-slider {
    background-color: white;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <FooterLeft>LALALALALALLALA</FooterLeft>

      <FooterCenter>
        <ShuffleIcon className="footer-green"></ShuffleIcon>
        <SkipPreviousIcon className="footer-icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          className="footer-green"
          fontSize="large"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer-icon"></SkipNextIcon>
        <RepeatIcon className="footer-green"></RepeatIcon>
      </FooterCenter>

      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterWrapper>
  )
}

export default Footer
