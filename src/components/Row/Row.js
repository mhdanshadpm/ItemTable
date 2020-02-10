import React from "react";
import SelectBox from "./SelectBox/SelectBox";
import "./Row.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import InputField from "./InputField/InputField";

const row = props => {
  const inputTypeHandler = (inputType, identifier, value) => {
    console.log(value);
    let inputValue = "";
    if (identifier === "0") {
      inputValue = +value.item;
    }
    if (identifier === "2") {
      inputValue = +value.pFee;
    }
    if (identifier === "1") {
      inputValue = +value.mFee;
    }
    if (identifier === "3") {
      inputValue = +value.uFee;
    }
    console.log(inputValue);
    switch (inputType) {
      case "select":
        return (
          <SelectBox
            id={props.id}
            change={props.changing}
            identifier={identifier}
          />
        );
      case "currency":
        return (
          <InputField
            type="number"
            name={identifier}
            onChange={event => props.changing(event, props.id)}
          />
        );
      default:
        return <input type="text" />;
    }
  };

  const row = props.inputType[0].map((el, index) => {
    return (
      <td key={index}>
        {inputTypeHandler(el.inputType, index, props.inputType[1])}
      </td>
    );
  });
  return (
      <div className='Row'>
      <tr>
        {row}
        <td>
          <button onClick={() => props.deleting(props.id)}><FontAwesomeIcon size='lg' icon={faTrashAlt} style={{color:'#8a2be2'}}/></button>
        </td>
      </tr>
      </div>
  );
};

export default row;
