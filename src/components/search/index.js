import { Card, Space, Typography, Image } from "antd";
import React, { useState } from "react";

import { Input } from "antd";
import "./style.css";

const { Text } = Typography;
const Search = ({ setLocal }) => {
  const [value, setValue] = useState("");

  function handleOnValueChange(e) {
    setValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      setLocal(value);
    }
  }

  return (
    <div className="search">
      <Input
        value={value}
        onChange={handleOnValueChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
      ></Input>
    </div>
  );
};

export default Search;
