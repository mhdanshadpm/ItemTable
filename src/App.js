import React, { useState } from "react";
import "./App.scss";
import Table from './components/Table/Table';
const App = () => {
  const colDetails = useState([
    {
      name: "Item",
      inputType: "select"
    },
    {
      name: "Material Fee",
      inputType: "currency"
    },
    {
      name: "Packing Fee",
      inputType: "currency"
    },
    {
      name: "Unpacking Fee",
      inputType: "currency"
    }
  ])[0];

  return <div className="App">
    <Table colDet={colDetails} />
  </div>;
};

export default App;
