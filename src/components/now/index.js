import { Card, Space, Typography, Image } from "antd";
import React from "react";
import "./style.css";

const { Text } = Typography;
const Now = ({ local, temp }) => {
  return (
    <div className="now">
      <div className="info">
        <div className="locaiton">
          <Text className="location--text">{local}</Text>
        </div>
        <div className="current___temp">
          <Text className="current__temp--text">{`${Math.trunc(temp)}`}</Text>
        </div>
      </div>
      <div className="now__image">
        <Image src={require("./static/5376613.webp")}></Image>
      </div>
    </div>
  );
};

export default Now;
