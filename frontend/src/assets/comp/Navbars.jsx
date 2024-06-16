// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./shad/ui/select";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shad/ui/select"
import { Search } from "lucide-react"
import { useState } from "react";




const Navbar=({setCategory})=>{

  const [searchQuery,setSearchQuery]=useState(' ')

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory(searchQuery);
  };

    return (
          <nav className="flex justify-between gap-10">
          <div className="flex p-5"> 
              <h2 className="text-center text-2xl">Latest <span className="badge bg-danger">News</span></h2>
          </div>
          <div class="navbar">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
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
          <div className="nav-link cursor-pointer" onClick={()=>setCategory("general")}>General</div>
        </SelectContent>
  </Select>
  
</div>
</nav>

    )
    
        

}

export default Navbar