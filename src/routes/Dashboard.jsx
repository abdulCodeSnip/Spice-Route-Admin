import React from 'react'
import SideBar from '../resusableComponents/SideBar'
import Header from '../resusableComponents/Header'

const Dashboard = () => {
    return (
        <div className='flex overflow-hidden h-screen'>
            <SideBar />
            <main className='flex-1'>
                <Header />
            </main>
        </div>
    )
}

export default Dashboard
