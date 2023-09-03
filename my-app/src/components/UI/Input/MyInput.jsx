import React from 'react';
import module from '../Input/myInput.module.css'
const MyInput = ({...props}) => {
    return (
        <input {...props}  className={module.my__input}>
            {props.children}
        </input>
    );
};

export default MyInput;