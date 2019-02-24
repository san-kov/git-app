import React from 'react'
import BigButton from './styled/BigButton'

const params = {
  client_id: '',
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
