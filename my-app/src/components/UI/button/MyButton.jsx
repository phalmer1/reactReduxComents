import React from 'react';
import module from '../button/myButton.module.css'

const MyButton = ({children,onClick}) => {
    return (
        <button className={module.my__btn} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;