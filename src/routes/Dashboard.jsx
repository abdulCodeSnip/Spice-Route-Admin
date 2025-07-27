import React from 'react'
import SideBar from '../resusableComponents/SideBar'
import Header from '../resusableComponents/Header'
import { TiUserOutline } from 'react-icons/ti'
import ContentCards from '../components/Dashboard/ContentCards'
import { LuUsersRound } from 'react-icons/lu'
import { FaBowlFood, FaWheatAwn } from 'react-icons/fa6'
import { IoFastFoodOutline, IoRestaurantOutline } from 'react-icons/io5'

const Dashboard = () => {

    // Default Content for Cards to preview, later on we'll add real data into it

    const defaultCardsData = [
        {
            id: 1,
            title: "Total Users",
            internalValue: 112,
            icon: <LuUsersRound size={30} color='green' />,
            footer: "1.8% Increased from Last Week"
        },
        {
            id: 2,
            title: "Total Recipes",
            internalValue: 1021,
            icon: <IoFastFoodOutline size={30} color='darkorange' />,
            footer: "3.2% Increased from Last Week"
        },
        {
            id: 3,
            title: "Total Restaurants",
            internalValue: 2,
            icon: <IoRestaurantOutline size={30} color='purple' />,
            footer: "1% Increased from Last Week"
        },
        {
            id: 4,
            title: "Meal Plans",
            internalValue: 452,
            icon: <FaWheatAwn size={30} color='lightblue' />,
            footer: "1.9% Increased from Last Week"
        }
    ]


    return (
        <div className='flex h-screen'>
            <SideBar />

            {/* Main content with a header for dashboard */}
            <main className='flex-1 bg-gray-50 overflow-y-auto'>
                <Header />

                {/* Actual content just after header */}
                <div className="flex-1 max-w-7xl p-6">

                    {/* Welcome message for admin */}
                    <div className='flex flex-col space-y-5'>
                        <div>
                            <h2 className='text-gray-800 font-medium text-2xl'>Welcome back JOHN</h2>
                            <span className='text-sm text-gray-500'>Manage your recipes, chats, and restaurants with ease</span>
                        </div>

                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                            {
                                defaultCardsData.map((content) => (
                                    <ContentCards content={content} key={content.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
