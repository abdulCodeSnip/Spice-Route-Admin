import React from 'react'

const FormInput = ({ id, required, label, type, placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="text-gray-800 mb-1 font-medium text-sm block">
                {label} {required && <span className="text-red-600 font-medium">*</span>}
            </label>
            <input
                id={id}
                type={type}
                name={id}
                placeholder={placeholder}
                className="text-sm px-3 py-2 rounded-lg border border-gray-300 outline-blue-600"
                value={value}
                onChange={onChange}
            />
        </div>
    )

}

export default FormInput
