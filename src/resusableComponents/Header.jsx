import React from 'react'
import CustomInput from './CustomInput'

const Header = () => {
    return (
        <header className='bg-white shadow-xl z-10'>
            <div className="flex flex-row items-center justify-between h-16 px-5">
                <CustomInput placeholder={"Search input...."} />
            </div>
        </header>
    )
}

export default Header
