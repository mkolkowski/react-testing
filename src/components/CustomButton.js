import React from 'react'

const CustomButton = ({ value, onClick }) => (
    <div>
        <input type="hidden" value={value} />
        <button onClick={onClick} >
            Stan przycisku: {value ? 'OK' : 'NON'}
        </button>
    </div>
);

export default CustomButton