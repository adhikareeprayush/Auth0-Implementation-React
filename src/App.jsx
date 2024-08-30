import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Current User", user);
  return (
    <div className='App'>
      <div className="container">
        {isAuthenticated ? <h1>Hello, {user.name}</h1> : <h1>Hello, Dev</h1>}
        <p>An example to implement <b>auth0</b> in production!</p>
          {isAuthenticated
              ?
              <button onClick={()=>logout()}>Logout</button>
              :
              <button onClick={()=>loginWithRedirect()}>Login With Redirect</button>
          }
      </div>
    </div>
  )
}

export default App
