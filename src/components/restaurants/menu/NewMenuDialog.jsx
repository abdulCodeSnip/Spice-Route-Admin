import React, { createElement, useState } from 'react'
import { PiPlus } from 'react-icons/pi';

const NewMenuDialog = ({ closeDialog }) => {
    const [inputCounter, setInputCounter] = useState(0);
    const [inputs, setInputs] = useState([]);

    const addInputForMenuDynamically = () => {
        const newInputCounter = inputCounter + 1;
        setInputCounter(newInputCounter);
        setInputs((previousInputs) => [
            ...previousInputs,
            { name: `Menu Item ${newInputCounter}`, value: "", id: `item-${newInputCounter}` }]);
    };

    const handleInputChange = (index, value) => {
        setInputs((previousInputs) =>
            previousInputs.map((inputValue, idx) => idx === index ? { ...inputValue, value } : inputValue))
    }

    return (
        <div className='w-[400px]'>
            <div className='flex flex-row gap-4 items-center justify-between'>
                <h2>
                    New Menu
                </h2>
                <div>
                    <button onClick={addInputForMenuDynamically} className='flex flex-row px-3 py-2 text-sm items-center gap-1 cursor-pointer 
                    bg-blue-500 text-white rounded-lg'>
                        <PiPlus size={15} />
                        <span>Add Item</span>
                    </button>
                </div>
            </div>
            <div className='flex flex-col space-y-3  my-2
            '>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        id={input?.id}
                        placeholder={`Menu Item ${index + 1}`}
                        className='px-3 py-2 rounded-lg border border-gray-200 text-sm'
                        name={input?.name}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                ))}
            </div>
            {
                inputs?.length > 0 && (
                    <div className="flex flex-row items-center justify-end gap-2">
                        <button onClick={closeDialog} className="px-3 py-2 bg-gray-200 rounded-lg text-sm text-gray-800 cursor-pointer my-2">
                            Cancel
                        </button>
                        <button className="px-3 py-2 bg-blue-500 rounded-lg text-sm text-white cursor-pointer my-2">
                            Add Menu Now
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default NewMenuDialog
