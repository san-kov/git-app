import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import GithubAuth from '../components/GithubAuth'

const PageWrapper = styled.div`
  position: relative;
`

const Footer = styled.div`
  height: 60vh;
  background: url(https://sfondo.info/i/original/2/6/c/48554.jpg);
  position: absolute;
  top: 40vh;
  left: 0;
  width: 100%;
  z-index: -1;
  background-position: center;
  filter: blur(1px);
`

const WelcomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background: linear-gradient(rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.8)),
    url(https://s1.funon.cc/img/orig/201810/07/5bba762cb7e3b.jpg);
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;

  color: rgb(252, 252, 252);
  text-transform: uppercase;
  letter-spacing: 3px;

  font-size: 40px;

  align-items: flex-end;
  flex-direction: column;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  > div {
    margin: 45px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
  }

  > div h1 {
    margin: 5px;
  }

  > div a {
    align-self: flex-end;
  }
`

export default class Welcome extends React.Component {
  async componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1]

    if (code) {
      await axios.post(`http://localhost:8080/api/users/auth/github`, { code })
    }
  }
  render() {
    return (
      <PageWrapper>
        <WelcomeWrapper>
          <div>
            <h1>Welcome to GitApp</h1>
            <GithubAuth />
          </div>
          <div />
        </WelcomeWrapper>
        <Footer />
      </PageWrapper>
    )
  }
}
