import Navbars from "@/assets/comp/Navbars";
import { useState } from "react"
import Newsboard from "./Newsboard";


const App=()=>{
  const[category,setCategory]=useState("general");
  return(
    <div className="row justify-content-center">
      <Navbars setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  )
}

export default App