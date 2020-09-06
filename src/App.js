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
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token)
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
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        {token ? <Player spotify={spotify} /> : <Login />}
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
