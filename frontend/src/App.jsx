import { SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import Authentication from './components/Authentication'
import Home from './pages/Home'
// import { CartProvider } from "react-use-cart";
// import Newsboard from './assets/comp/Newsboard';
// import Cart from './assets/comp/Cart';

function App() {

  return (
    <>
      <SignedIn>
         <Home/>
      </SignedIn>
      <SignedOut>
        <Authentication/>
      </SignedOut>
    </>
  )
}

export default App

// import { SignedIn, SignedOut } from '@clerk/clerk-react'
// import React from 'react'
// import Authentication from './components/Authentication'
// import Newsboard from "./assets/components/Newsboard"
// import Cart from "./assets/components/cart";

// import Home from './pages/Home'
// import { CartProvider } from "react-use-cart";

// function App() {
//   const[category,setCategory]=useState("general");

//   return (
//     <>
//       <SignedIn>
//         <Home/>
//       </SignedIn>
//       <SignedOut>
//         <Authentication/>
//       </SignedOut>
//     </>
//   )
// }

// export default App

