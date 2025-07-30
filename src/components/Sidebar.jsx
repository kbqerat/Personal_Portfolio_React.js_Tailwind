import {Link, NavLink} from "react-router-dom";
import { useState } from "react";
import { VscSearch, VscAccount  } from "react-icons/vsc";
import { LiaFolderOpenSolid  } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { BsTerminal } from "react-icons/bs";
import "../styles/Sidebar.css";

export default function Sidebar({toggleSidebar}) {
    const links = [
        {to: "/folders", icon: <LiaFolderOpenSolid className="text-2xl" onClick={toggleSidebar}/>},
        {to: "/terminal", icon: <BsTerminal className="text-2xl" />},
    ]

    const bottomLinks = [
        {to: "/profile", icon: <VscAccount className="text-2xl" />},
        {to: "/settings", icon: <CiSettings className="text-2xl" />},
    ]


    return (
        <aside className="bg-[#333333] text-[#ffffff] shadow-sm flex flex-col justify-between items-center top-0 z-49 w-10 h-auto min-h-screen">
            <div>
                <ul className="flex flex-col gap-5 p-2">
                    {links.map(({to, icon}, index) => (
                        <li key={index}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? "nav-icon active" : "nav-icon"
                                }
                            >
                                {icon}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex flex-col items-center gap-5 p-2">
                    {bottomLinks.map(({to, icon}, index) => (
                        <li key={index}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? "nav-icon active" : "nav-icon"
                                }
                            >
                                {icon}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}