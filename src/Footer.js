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
  display: flex;
  align-items: center;
  color: white;
  width: 300px;

  .album-cover {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
    white-space: nowrap;
  }

  .footer-song-info > h4 {
    margin-bottom: 5px;
  }

  .footer-song-info > p {
    font-size: 12px;
  }
`
const FooterCenter = styled.div`
  flex: 0.4;
  margin: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;

  .footer-green {
    color: #1ed15e;
  }

  .footer-icon {
    color: white;
  }

  .footer-green:hover,
  .footer-icon:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2);
  }
`
const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.3;
  color: white;

  * .MuiSlider-root {
    color: #1ed15e;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <FooterLeft>
        <img src="" alt="album cover" />
        <div className="footer-song-info">
          <h4>Eminência Parda</h4>
          <p>Emicida</p>
        </div>
      </FooterLeft>

      <FooterCenter>
        <ShuffleIcon className="footer-green"></ShuffleIcon>
        <SkipPreviousIcon className="footer-icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          className="footer-icon"
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
