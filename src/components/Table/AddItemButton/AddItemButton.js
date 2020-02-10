import React from 'react'
import './AddItemButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const AddItemButton = (props) => {
    return ( 
        <div className='AddItemButton'>
            <FontAwesomeIcon icon={faPlusCircle} style={{color:'#8a2be2'}}/>
            <button onClick={props.clicked}>Add Item</button>
        </div>
        
     );
}
export default AddItemButton;