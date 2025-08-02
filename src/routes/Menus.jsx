import React, { useState } from 'react'
import SideBar from '../resusableComponents/SideBar'
import Header from '../resusableComponents/Header'
import { CgAdd } from 'react-icons/cg'
import { IoMdAdd } from 'react-icons/io';
import NewMenuDialog from '../components/restaurants/menu/NewMenuDialog';

const Menus = () => {
    const [showAddMenuDialog, setShowAddMenuDialog] = useState(false);
    return (
        <div className='h-screen flex-1 overflow-hidden flex'>
            <SideBar />

            {/* Actaul content of the component */}
            <main className='flex-1 flex flex-col w-full'>
                <Header />
                <div className='max-w-7x p-6'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex flex-row justify-between'>
                            <div className='space-y-2'>
                                <h2 className='text-gray-800 font-medium text-xl'>Menus</h2>
                                <span className='text-sm text-gray-500'>Manage all the menus for restaurants, add menus to restaruants</span>
                            </div>

                            {/* Adding menu to a specific restaurant */}
                            <div>
                                <button
                                    onClick={() => setShowAddMenuDialog(true)}
                                    className='px-3 py-2 rounded-lg flex flex-row gap-2 items-center 
                                bg-center bg-blue-500 text-white font-medium text-sm cursor-pointer'>
                                    <IoMdAdd size={18} />
                                    <h2>Add New Menu</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                        showAddMenuDialog && (
                            <div className='fixed top-10 right-96 xl:right-96 lg:right-80 md:right-60 sm:right-20 bg-white p-4 rounded-lg shadow-sm z-40'>
                                <NewMenuDialog closeDialog={() => setShowAddMenuDialog(false)} />
                            </div>
                        )
                    }
                    {
                        showAddMenuDialog && (
                            <div className='inset-0 bg-black/40 z-30 fixed'>

                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Menus
