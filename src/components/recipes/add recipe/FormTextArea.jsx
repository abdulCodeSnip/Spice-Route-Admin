import React from 'react'

const FormTextArea = ({ id, label, placeholder, value, onChange }) => {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="text-gray-800 mb-1 font-medium text-sm block">{label}</label>
            <textarea
                id={id}
                name={id}
                rows={8}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-xl p-2 text-sm outline-blue-600"
            />
        </div>
    )
}

export default FormTextArea
