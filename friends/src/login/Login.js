import React from 'react'

const Login = props => (
  <form>
    <input
      onChange={e => props.handleCredentials({ username: e.target.value })}
      value={props.username}
      type="text"
      placeholder="Username"
      required
    />
    <input
      onChange={e => props.handleCredentials({ password: e.target.value })}
      value={props.password}
      type="password"
      placeholder="Password"
      required
    />
    <button>Login</button>
  </form>
)

export default Login
