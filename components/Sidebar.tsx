"use client"; //User interactive 

import { usePathname } from "next/navigation"; //imports
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";

interface SidebarProps {//interfaces
    children: React.ReactNode; //children prop
    songs: Song[];
}
const Sidebar: React.FC<SidebarProps> = ({
    children,songs 
}) => { //accept children
    const pathname = usePathname(); //Returns a string of the current url's pathname /.../...

    //useMemo only recomputes the memoized value when one of the dependences(pathName/URL) changes
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {   
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return(
        //main div: flex represents to adjust the size 
        <div className="flex h-full">
            <div className="
                hidden 
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
              "
            >
                
                <Box>
                    <div 
                       className="
                         flexflex-col
                         gap-y-4
                         px-5
                         py-4
                    "
                    >
                        {routes.map((item)=> ( //maps the attirbutes of an item dependent on pathName
                            <SidebarItem
                            key={item.label}
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs = {songs}/>
                </Box>
            </div>
            <main className = "h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;