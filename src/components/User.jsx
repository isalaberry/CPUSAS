import React from 'react';
import { FaUser } from 'react-icons/fa';
import './../App.css'; 

const UserButton = () => {
    const handleClick = () => {
        console.log('User button clicked');
    };

    return (
        <button className="user-button" onClick={handleClick}>
            <FaUser size={24} />
        </button>
    );
};

export default UserButton;