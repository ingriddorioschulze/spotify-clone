import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  body ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat"
  }

  
`
export default GlobalStyles
