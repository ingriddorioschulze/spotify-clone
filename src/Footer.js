import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDataLayerValue } from './DataLayer'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import { Grid, Slider } from '@material-ui/core'

//#region styles
const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.spotifyBlack};
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
    font-size: ${({ theme }) => theme.font.size.s};
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
    color: ${({ theme }) => theme.colors.spotifyGreen};
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
    color: ${({ theme }) => theme.colors.spotifyGreen};
  }
`
//#endregion

function Footer({ spotify }) {
  const [{ item, playing }, dispatch] = useDataLayerValue()

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: 'SET_PLAYING',
        playing: r.is_playing,
      })

      dispatch({
        type: 'SET_ITEM',
        item: r.item,
      })
    })
  }, [spotify])

  //#region functions

  function handlePlayPause() {
    if (playing) {
      spotify.pause()
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      })
    } else {
      spotify.play().catch((e) => console.error('fail', e))
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      })
    }
  }

  function skipNext() {
    spotify.skipToNext()
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: 'SET_ITEM',
        item: r.item,
      })
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      })
    })
  }

  function skipPrevious() {
    spotify.skipToPrevious(
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item,
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true,
        })
      }),
    )
  }
  //#endregion

  return (
    <FooterWrapper>
      <FooterLeft>
        <img
          alt={item?.name}
          className="album-cover"
          src={item?.album.images[0].url}
        />
        {item ? (
          <div className="footer-song-info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="footer-song-info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon onClick={skipNext} className="footer-icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            className="footer-icon"
            fontSize="large"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            className="footer-icon"
            fontSize="large"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer-icon" />
        <RepeatIcon className="footer-green" />
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
