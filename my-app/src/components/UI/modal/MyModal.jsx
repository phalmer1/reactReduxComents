import React from 'react';
import module from '../modal/myModal.module.css'

const MyModal = ({children,visible,setVisible}) => {

    const rootClasses = [module.myModal]

    if(visible){
        rootClasses.push(module.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={module.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;