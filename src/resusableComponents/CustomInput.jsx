import React from 'react'
import { BiSearch } from 'react-icons/bi'

const CustomInput = (value, onChangInput, placeholder, name) => {

    return (
        <div className='relative'>
            <input
                name={name}
                id={name}
                placeholder='Search Input.... '
                className='px-7 py-2 rounded-lg border border-gray-200 shadow-sm outline-orange-400'
            />
            <div className='absolute top-3.5 left-2'>
                <BiSearch size={17} color='gray' />
            </div>
        </div>
    )
}

export default CustomInput
