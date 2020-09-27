import React from 'react'
import styled from 'styled-components'

//#region styles
const SidebarOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  color: grey;
  cursor: pointer;
  transition: 200ms color ease-in;

  :hover {
    color: white;
  }

  .icon {
    margin-left: 10px;
    margin-right: 10px;
    height: 30px;
  }

  > p,
  h4 {
    margin-top: 10px;
    margin-left: 20px;
    font-size: ${({ theme }) => theme.font.size.m};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
//#endregion

function SidebarOption({ title, Icon }) {
  return (
    <SidebarOptionWrapper>
      {Icon && <Icon className="icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionWrapper>
  )
}

export default SidebarOption
