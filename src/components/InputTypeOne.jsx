import React from 'react';

const InputTypeOne = ({ type, placeholder, onChange }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                style={{
                    padding: '10px',
                    borderRadius: '20px',
                    border: '1px solid #194569',
                    margin: '10px',
                    width: '40%',
                    minWidth: '300px',
                    boxSizing: 'border-box',
                }}
            />
        </div>
    );
};

export default InputTypeOne;