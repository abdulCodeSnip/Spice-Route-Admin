import React, { useEffect, useState } from 'react'
import SideBar from '../resusableComponents/SideBar'
import Header from '../resusableComponents/Header'
import { TiUserOutline } from 'react-icons/ti'
import ContentCards from '../components/Dashboard/ContentCards'
import { LuUserRoundPlus, LuUsersRound } from 'react-icons/lu'
import { FaBowlFood, FaWheatAwn } from 'react-icons/fa6'
import { IoFastFoodOutline, IoRestaurantOutline } from 'react-icons/io5'
import { Link } from 'react-router'
import { RiRestaurant2Fill } from 'react-icons/ri'
import { GiHotMeal } from 'react-icons/gi'

const Dashboard = () => {

    // fetch all the recipes, meal plans and everything on the dashboard, then use redux to manage everything

    const [allRecipes, setAllRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllRecipes = async () => {
        try {
            setIsLoading(true);
            const apiResponse = await fetch(`http://localhost:4000/recipes`, {
                method: "GET",
            });
            const result = await apiResponse.json();
            console.log(result);
            setAllRecipes(result);
        } catch (error) {
            setIsLoading(true)
            console.log("Error with fetching recipes at Dashboard", error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAllRecipes();
    }, [])

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


    const quickActions = [
        {
            id: 1,
            pathname: "/add-new-recipe",
            icon: <GiHotMeal size={20} />,
            text: "Add New Recipe",
        },
        {
            id: 2,
            pathname: "/add-new-user",
            icon: <LuUserRoundPlus size={20} />,
            text: "Add New User",
        },
        {
            id: 3,
            pathname: "/add-new-restaurant",
            icon: <RiRestaurant2Fill size={20} />,
            text: "Add New Restaurant",
        }
    ];


    return (
        <div className='flex h-screen'>
            <SideBar />

            {/* Main content with a header for dashboard */}
            {
                isLoading ? <h2>Loading! Please wait......</h2> :
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
                                <div className="flex flex-col space-y-2">
                                    <h2 className='font-medium text-lg text-gray-800'>Quick Actions</h2>
                                </div>

                                {/* Quick action buttons to move directly to that page */}
                                <div className='w-full flex flex-row items-center justify-between gap-3'>
                                    {
                                        quickActions?.map((action, index) => (
                                            <Link
                                                to={action.pathname}
                                                key={index}
                                                className='px-3 py-3 gap-3 bg-white 
                                    hover:bg-gray-50 font-medium text-gray-600 flex text-sm items-center 
                                    flex-row justify-center w-full rounded-lg border border-gray-200 shadow shadow-gray-200 hover:text-gray-700'>
                                                {
                                                    action.icon
                                                }
                                                <span>{action.text}</span>
                                            </Link>
                                        ))
                                    }
                                </div>

                                <div>
                                    <h2 className='font-medium text-lg text-gray-800'>
                                        Recents Logs
                                    </h2>

                                    {/* Card for recent activity */}
                                </div>
                            </div>
                        </div>
                    </main>
            }
        </div>
    )
}

export default Dashboard
