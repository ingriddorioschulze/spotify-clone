import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from './DataLayer'

// #region styles

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
`
const HeaderRight = styled.div`
  align-items: center;
  display: flex;

  > h4 {
    margin-left: 10px;
  }
`
const HeaderLeft = styled.div`
  flex: 0.6;
  color: grey;
  display: flex;
  padding: 10px;
  min-width: 80px;
  align-items: center;
  border-radius: 30px;
  background-color: white;

  > svg {
    width: 24px;
  }
  > input {
    width: calc(100% - 24px);
    border: none;
  }
`
//#endregion

function Header() {
  const [{ user }, dispatch] = useDataLayerValue()

  console.log(user)
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </HeaderRight>
    </HeaderWrapper>
  )
}

export default Header
