import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

//#region styles
const SidebarWrapper = styled.div`
  flex: 0.2;
  color: white;
  min-height: 100vh;
  min-width: 230px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #040404;

  img {
    height: 65px;
    padding: 10px;
    margin-right: auto;
    object-fit: contain;
  }

  .sidebar-title {
    margin-left: 10px;
    padding: 5px;
    font-size: ${({ theme }) => theme.font.size.s};
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.spotifyBlack};
    width: 90%;
    margin: 10px auto;
  }
`
//#endregion

function Sidebar() {
  const [{ playlists }] = useDataLayerValue()

  return (
    <SidebarWrapper>
      <img
        className="album-cover"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={playlist.id} />
      ))}
    </SidebarWrapper>
  )
}

export default Sidebar
