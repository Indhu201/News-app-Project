// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./shad/ui/select";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shad/ui/select"
import { Search } from "lucide-react"


const Navbar=({setCategory})=>{
    return (


        
<nav className="flex justify-between gap-10">
<div className="flex p-5"> 
     <h2 className="text-center text-2xl">Latest <span className="badge bg-danger">News</span></h2>
</div>
<div class="navbar">
  <div class="container-fluid">
    <div class="d-flex gap-2.5 outline-black">
      <input className="flex outline-black pl-5"/>
      <button class="btn btn-outline-success" type="submit"><Search/></button>
    </div>
  </div>
</div>
<div className="p-5">

  <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("technology")}>Technology</div>
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("business")}>Business</div>
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("health")}>Health</div>
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("sports")}>Sports</div>
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </SelectContent>
  </Select>
</div>
</nav>

    )
    
        

}

export default Navbar