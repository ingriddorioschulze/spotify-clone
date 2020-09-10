import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

import theme from './theme'
import Login from './Login'
import Player from './Player'
import GlobalStyles from './GlobalStyles'
import { useDataLayerValue } from './DataLayer'

const AppWrapper = styled.div``
const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''
    let _token = hash.access_token

    if (_token) {
      spotify.setAccessToken(_token)

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
      spotify.getPlaylist('37i9dQZEVXcTsYpXKK2UkK').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        }),
      )
      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      })
    }
  }, [token, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        {!token && <Login />}
        {token && <Player spotify={spotify} />}
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
