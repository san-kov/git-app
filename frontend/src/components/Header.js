import React from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  padding: 5px;
  height: 50px;
  border-bottom: 1px solid rgb(235, 235, 235);

  > nav {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;

    > li {
      height: 100%;
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        widht: 100%;
        height: 100%;
      }
    }
  }
`

@inject('authStore')
@observer
class Header extends React.Component {
  render() {
    const { avatar, name } = this.props.authStore.user

    return (
      <HeaderWrapper>
        <nav className="right">
          <li>
            <img src={avatar} alt="" />
          </li>
        </nav>
      </HeaderWrapper>
    )
  }
}

export default Header
