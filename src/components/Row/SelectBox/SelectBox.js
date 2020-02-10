import React from 'react'
import './SelectBox.scss'

const selectBox = (props) => {
    return ( 
        <div className="SelectBox">
        <select onChange={(event) => props.change(event, props.id)} name={props.identifier}>
            <option value='Item 1'>Item 1</option>
            <option value='Item 2'>Item 2</option>
            <option value='Item 3'>Item 3</option>
            <option value='Item 4'>Item 4</option>
            <option value='Item 5'>Item 5</option>
            <option value='Item 6'>Item 6</option>
            <option value='Item 7'>Item 7</option>
            <option value='Item 8'>Item 8</option>
            <option value='Item 9'>Item 9</option>
            <option value='Item 10'>Item 10</option>
            <option value='Item 11'>Item 11</option>
        </select>
        </div>
     );
}
 
export default selectBox;