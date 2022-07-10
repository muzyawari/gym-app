import React from "react";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

import SelectDropdownWeight from "./SelectDropdownWeight";

const Weight = () => {
  const [text, setText] = React.useState("This is a controlled component");
  const [price, setPrice] = React.useState("");
  const [textarea, setTextarea] = React.useState(
    "This is a controlled text area component"
  );
  const formatPrice = (val) => Math.round(parseFloat(val));
  const handleChange = (e, setFn) => {
    setFn(e.target.value);
  };
  const handleSave = ({ name, value, previousValue }) => {
    alert(name + " saved as: " + value + " (prev: " + previousValue + ")");
  };
  return (
    <React.Fragment>
      <span className="inline-flex items-center px-3 rounded-l-md border h-[2.2rem] mt-[2.5px]  border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
        Set 1
      </span>
      <EditText
        name="priceInput"
        type="number"
        style={{
          fontSize: "16px",
          border: "1px solid #ccc",
          paddingLeft: "15px",
          paddingTop: "6.5px",
          width: "320px",
          height: "35px",
        }}
        className="flex-1 min-w-0 block w-full px-3 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
        value={price}
        onChange={(e) => handleChange(e, setPrice)}
        formatDisplayText={formatPrice}
      />
    </React.Fragment>
  );
};

export default Weight;
