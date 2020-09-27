import React from 'react'
import styled from 'styled-components'

//#region styles
const SongRowWrapper = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.spotifyBlack};
    opacity: 0.8;
  }

  .album-cover {
    height: 40px;
    width: 40px;
  }
`
const SongInfo = styled.div`
  margin-left: 20px;

  > h1 {
    font-size: 16px;
  }

  > p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`
//#endregion

function SongRow({ track }) {
  return (
    <SongRowWrapper>
      <img
        src={track.album.images[0].url}
        alt="Album Cover"
        className="album-cover"
      />
      <SongInfo>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')} -{' '}
          {track.album.name}
        </p>
      </SongInfo>
    </SongRowWrapper>
  )
}

export default SongRow
