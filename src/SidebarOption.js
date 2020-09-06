import React from 'react'
import styled from 'styled-components'

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
  }

  > p {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
  }
`

function SidebarOption({ title, Icon }) {
  return (
    <SidebarOptionWrapper>
      {Icon && <Icon className="icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionWrapper>
  )
}

export default SidebarOption
