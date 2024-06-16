import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./shad/ui/popover";
import { Bookmark, Cloud, Compass, Flame, Heart, Home, Instagram, InstagramIcon, Map, Menu, MessageCircle, Newspaper, NotebookIcon, PlusSquare, Save, Search, Settings, Sun, TrendingUpIcon, User, User2 } from "lucide-react";
import { UserButton, UserProfile, useSession, useUser } from "@clerk/clerk-react";
import Weather from "./Weather";
import Liked from "@/pages/Liked";


const Sidebar = () => {

  return (
    <div className="w-[70px] lg:w-[250px] h-screen border border-r min-[sidebarp-4] p-2 pb-6">
    {/* sperating top and bottom */}
      <div className="flex flex-col justify-between h-full">
      {/* top content starts here */}
      <div>
            <div className="flex flex-col items-center gap-5">
                <div className="p-6 flex gap-2">
                    {/* <img src="\logo.svg" alt="logo" className="w-full hidden lg:block"/>
                    <Instagram className="block lg:hidden"/> */}
                    <Newspaper/><p className=" text-neutral-900 lg:block hidden font-bold">News App</p>

                </div>
            </div>

            <div className="flex flex-col gap-2">
                    <div className="w-full p-3 rounded-lg flex gap-2.5 cursor-pointer hover:bg-neutral-200/50 transition-all duration-500">
                    <Home/>
                    <p className=" text-neutral-900 lg:block hidden font-bold">HOME</p>

                    </div>
            </div>
            <div className="flex flex-col gap-2">
                    <div className="w-full p-3 rounded-lg flex gap-2.5 cursor-pointer hover:bg-neutral-200/50 transition-all duration-500">
                    <Flame/>
                    <p className=" text-neutral-900 lg:block hidden font-bold">Trending</p>

                    </div>
            </div>
            <div className="flex flex-col gap-2">
                    
                    <a href="/relative/path/to/your/component" className="link-class">
                    <div className="w-full p-3 rounded-lg flex gap-2.5 cursor-pointer hover:bg-neutral-200/50 transition-all duration-500">
                    <Heart/>
                            <p className="text-neutral-900 lg:block hidden font-bold">
                                Liked
                            </p>
                    </div>
            </a>
            </div>


            
            <div className="flex flex-col gap-2">
                    <div className="w-full p-3 rounded-lg flex gap-2.5 cursor-pointer hover:bg-neutral-200/50 transition-all duration-500">
                    <Save/>
                    <p className=" text-neutral-900 lg:block hidden font-bold">Saved</p>

                    </div>
            </div>
            <div className="flex flex-col gap-2">
                    <div className="w-full p-3 rounded-lg flex gap-2.5 cursor-pointer hover:bg-neutral-200/50 transition-all duration-500">
                    <User2/>
                    <p className=" text-neutral-900 lg:block hidden font-bold">Profile</p>

                    </div>
            </div>
            
        </div>
                            
       {/*Bottom content starts here */}
            <div>
            <Popover>

                <PopoverTrigger className="flex items-start gap-2.5 w-full p-2 rounded-sm font-bold">
                    <Cloud className="w-6 h-6"/> 
                    <div className="lg:block hidden">Weather</div>
                </PopoverTrigger>
                <PopoverContent className="ml-4 shadow-md p-2 bg-neutral-200 border-black w-500">
                    <Weather/>
                </PopoverContent>
            </Popover>

            </div>
      </div>
    </div>
  );
};

export default Sidebar;
