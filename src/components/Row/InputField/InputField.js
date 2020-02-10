import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './InputField.scss';

const InputField = (props) => {
    return ( 
        <div  className="InputField">
            <FontAwesomeIcon className='icon' icon={ faDollarSign } />
            <input type ='number' className='input-field'  id={props.id}
            onChange={props.change}
            identifier={props.identifier}></input>
        </div>
     );
}
 
export default InputField;