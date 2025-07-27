import React, { useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi'
import { BsBell, BsQuestion } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';

const Header = () => {

    const [searchInput, setSearchInput] = useState("");
    return (
        <header className='bg-white shadow-xl z-10'>
            <div className="flex flex-row items-center justify-between h-16 px-6">

                {/* Input search bar at the top of the main content */}
                <div className='relative'>
                    <div className='absolute top-3 left-2'>
                        <BiSearch size={18} color='gray' />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder='Search Dashboard...'
                            className='pl-7 px-3 py-2 rounded-xl border border-gray-200 outline-blue-600' />
                    </div>
                </div>

                <div className='flex flex-row items-center justify-center gap-x-3'>
                    <button className='p-2 rounded-full hover:bg-gray-200 transition-all cursor-pointer'>
                        <FaBell color='gray' size={18} />
                    </button>
                    <button className='p-2 rounded-full hover:bg-gray-200 transition-all cursor-pointer'>
                        <AiFillQuestionCircle color='gray' size={18} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
