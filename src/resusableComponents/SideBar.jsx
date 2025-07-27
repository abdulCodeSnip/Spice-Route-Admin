import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { CiPlane } from 'react-icons/ci'
import { FaHistory } from 'react-icons/fa'
import { GiFoodChain, GiHotMeal } from 'react-icons/gi'
import { IoFastFoodOutline, IoNewspaperOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuUsersRound } from 'react-icons/lu'
import { MdDashboard, MdOutlineDashboard } from 'react-icons/md'
import { RiContactsBookLine, RiMessage2Line, RiRestaurantLine } from 'react-icons/ri'
import { TbLayoutDashboard } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {

    const { pathname } = useLocation();
    const links = [
        {
            id: 0,
            path: "/",
            text: "Dashboard",
            icon: <TbLayoutDashboard size={18} />
        },
        {
            id: 1,
            path: "/users",
            text: "Users",
            icon: <LuUsersRound size={18} />,
        },
        {
            id: 2,
            path: "/recipes",
            text: "Recipes",
            icon: <IoFastFoodOutline size={18} />,
        },
        {
            id: 3,
            path: "/restaurants",
            text: "Restaurants",
            icon: <RiRestaurantLine size={18} />,
        },
        {
            id: 4,
            path: "/meal-plans",
            text: "Meal Plans",
            icon: <GiHotMeal size={18} />,
        },
        {
            id: 5,
            path: "/profile",
            text: "Profile",
            icon: <CgProfile size={18} />,
        }
    ]
    return (
        <div className="w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-4 flex items-center border-b border-gray-800">
                <span className="text-2xl text-white">
                    logo
                </span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-2 space-y-1.5">

                    {/* Custom Links with custom Styling */}
                    {
                        links.map((custom) => (
                            <Link to={custom.path} className={`flex items-center text-sm font-medium px-3 py-2 ${custom?.path === pathname ? "bg-gray-700 text-white border-l-4 border-l-blue-500 rounded-l-none" : "bg-gray-800 text-gray-400"} rounded-lg gap-x-2`}>
                                <div className='h-6 w-6 items-center justify-center flex'>
                                    {custom?.icon}
                                </div>
                                <span>{custom.text}</span>
                            </Link>
                        ))
                    }

                </nav>
            </div>
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center">
                    <div
                        className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white"
                    >
                        <span className="text-sm font-medium">JD</span>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">John Doe</p>
                        <span className='text-xs text-gray-500'>Admin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
