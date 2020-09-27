import React from 'react'
import styled from 'styled-components'
import { loginUrl } from './spotify'

//#region styles
const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  > img {
    width: 30%;
  }

  > a {
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.spotifyGreen};
    border-radius: 99px;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: white;
    text-decoration: none;
  }
`
//#endregion

function Login() {
  return (
    <LoginWrapper>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <a href={loginUrl} role="button">
        LOGIN WITH SPOTIFY
      </a>
    </LoginWrapper>
  )
}

export default Login
