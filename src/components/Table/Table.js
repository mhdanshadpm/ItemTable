import React, { useState, useEffect } from "react";
import Row from "../Row/Row";
import './Table.scss';
import AddItemButton from "./AddItemButton/AddItemButton";

const Table = props => {
    
  const [itemList, setItemList] = useState([]);
  const inputChangeHandler = (event,id) => {
    const currentList = [...itemList];
    const updatedList = {...currentList[id]};
    if(event.target.name === '0'){
        updatedList.item = event.target.value;
    }
    if(event.target.name === '1'){
        updatedList.mFee = event.target.value;
    }
    if(event.target.name === '2'){
        updatedList.pFee = event.target.value;
    }
    if(event.target.name === '3'){
        updatedList.uFee = event.target.value;
    }
    currentList[id] = updatedList;

    setItemList(currentList)

  }
  useEffect(() => console.log(itemList),[itemList]);
  const deleteListHandler = (id) =>{
      console.log(id)
      const currentState = [...itemList];
      setItemList(currentState.filter( (e,index)=> index !== id))
      console.log(itemList);
  }
  const addItemHandler = () => {
      setItemList([...itemList, {
          item: 'Item 1',
          mFee: '0',
          pFee: '1',
          uFee: '2',
      }])
  }
    return (
    <div className='Table'>
      <table>
        <thead>
          {/* <tr>
            {props.colDet.map((el, index) => {
              return <th key={index}>{el.name}</th>;
            })}
          </tr> */}
        </thead>
        <tbody >
          {itemList.map((el, index )=> <Row  deleting={deleteListHandler} key={index} changing={inputChangeHandler} inputType={[props.colDet, el]} id={index} />)}
        </tbody>
      </table>
      <AddItemButton clicked={addItemHandler} />
    </div>
  );
};

export default Table;
