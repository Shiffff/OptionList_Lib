import React from "react";

const InputOptions = ({ data, name, onSelect, defaultValue }) => {
  const handleChange = (event) => {
    onSelect(event);
  };

  const style = {
    select: {
      padding: "10px",
      backgroundColor: "rgb(235, 232, 232)",
      cursor: "pointer",
    },
    option: {
      backgroundColor: "white",
    },
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <br />
      <select
        name={name}
        value={defaultValue !== null ? defaultValue : ""}
        id={name}
        onChange={(e) => handleChange(e)}
        style={style.select}
      >
        {data.map((el, index) => {
          return (
            <option key={index} style={style.option}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputOptions;
