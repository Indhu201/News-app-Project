import { SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import Authentication from './components/Authentication'

function App() {
  return (
    <>
      <SignedIn>
        Please Log in
      </SignedIn>
      <SignedOut>
        <Authentication/>
      </SignedOut>
    </>
  )
}

export default App

