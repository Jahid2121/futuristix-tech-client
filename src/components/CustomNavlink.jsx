import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavlink = ({to, display}) => {
    return (
        <NavLink className="hover:text-customBlue mr-4" to={to}
        style={({isActive}) => ({
            color: isActive ? '#2196f3': '#888888',
            fontWeight: isActive ? '800': ''
        })} 
        >
            {display}
        </NavLink>
    );
};

export default CustomNavlink;