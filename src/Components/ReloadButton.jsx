import React from 'react';
import {IoReload} from 'react-icons/io5';

const ReloadButton = ({reload, type}) => {

    const emptyOutMemory = () => {
        // Clear out of memory the object with the specific type key
        localStorage.removeItem(type)
        // Test to make sure function is being called
        console.log('inside emptyOutMemory func')
        // After memory is cleared, call the getRecipeType function
        reload();
    }


    return (
        <IoReload
            style={{color:"#76AD76" ,cursor:"pointer", marginLeft:"0.5rem", height:"20px", width:"20px"}}
            onClick={() => emptyOutMemory()}
        />
    );
};





export default ReloadButton;
