import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa'

const ContentCards = ({ content }) => {
    return (
        <div key={content?.id} className={`p-4 rounded-2xl shadow-md border border-gray-100`}>
            <div className='flex flex-row gap-x-4 items-center'>
                <div className={`p-3 rounded-xl ${content?.id === 1 ? "bg-green-100" : content?.id === 2 ? "bg-orange-100" : content?.id === 3 ? "bg-purple-100" : "bg-blue-100"}`}>
                    {content?.icon}
                </div>
                <div>
                    <h2 className='text-lg font-medium text-gray-800'>{content?.title}</h2>
                    <div className='text-2xl font-medium'>
                        <h2>{content?.internalValue}</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row gap-x-1 items-center'>
                    {
                        <FaArrowUp className='text-blue-500' size={10} />
                    }
                    <span className='text-sm text-blue-500'>{content?.footer?.split(" ")?.at(0)}</span>
                    <span className='text-xs text-gray-500'>{content?.footer?.split("%")?.at(1)}</span>
                </div>
            </div>
        </div>
    )
}

export default ContentCards
