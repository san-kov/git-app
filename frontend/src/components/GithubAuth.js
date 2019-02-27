import React from 'react'
import BigButton from './styled/BigButton'

const params = {
  client_id: 'f16c8ca1bd06792cd0ba',
  scope: 'read:user'
}

export default function GithubAuth() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${
        params.client_id
      }&scope=user&redirect_uri=${'http://localhost:3000/callback'}`}
    >
      <BigButton>Sign up with GitHub</BigButton>
    </a>
  )
}
