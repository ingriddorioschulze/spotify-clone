import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import SongRow from './SongRow'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

//#region styles
const BodyWrapper = styled.div`
  flex: 0.8;
  color: white;
  min-height: 100vh;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  overflow-y: overlay;

  ::-webkit-scrollbar {
    display: none;
  }
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  > img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`
const InfoTextWrapper = styled.div`
  flex: 1;

  > h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }

  > .body-shuffle {
    font-size: 80px;
    margin: 20px 0 20px 30px;
    fill: white;
  }
  .body-shuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }

  .favorite-icon:hover,
  .icon-hover:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`
const ListOfSongs = styled.div`
  margin: 20px -30px;
`

//#endregion

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()

  //#region functions
  function playPlaylist(id) {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
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
      })
  }

  function playSong(id) {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
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
      })
  }
  //#endregion

  return (
    <BodyWrapper>
      <Header spotify={spotify} />
      <InfoWrapper>
        <img src={discover_weekly?.images[0].url} alt="Discover Weekly"></img>
        <InfoTextWrapper>
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </InfoTextWrapper>
      </InfoWrapper>
      <ListOfSongs>
        <Icons>
          <PlayCircleFilledIcon
            color="primary"
            fontSize="large"
            className="body-shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" className="icon-hover" />
          <MoreHorizIcon className="icon-hover" />
        </Icons>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} key={item.track.id} />
        ))}
      </ListOfSongs>
    </BodyWrapper>
  )
}

export default Body
