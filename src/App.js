import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import theme from './theme'
import Login from './Login'
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        console.log(user, 'user')
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>{token ? <h1>Logged in</h1> : <Login />}</AppWrapper>
    </ThemeProvider>
  )
}

export default App
