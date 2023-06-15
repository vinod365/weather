import { Card, Space, Typography, Image } from "antd";
import React from "react";
import "./style.css";
import { IconMap } from "antd/es/result";

// import ikg from "'./../../src/static/images/cloud.png";

const { Text } = Typography;
const AirConditions = ({ pressure, humidity, feel }) => {
  return (
    <div className="air__conditions">
      <div className="heading">
        <Text className="heading--text">AIR CONDITIONS</Text>
        <Text className="see__more">see more</Text>
      </div>
      <div className="conditions">
        <div className="conditions__card real__feel">
          <Text className="conditions__card--text">Pressure</Text>
          <Text className="conditions__card--temp">{pressure}</Text>
        </div>

        <div className="conditions__card ">
          <Text className="conditions__card--text">Humidity</Text>
          <Text className="conditions__card--temp">{humidity}</Text>
        </div>

        <div className="conditions__card ">
          <Text className="conditions__card--text">Feel</Text>
          <Text className="conditions__card--temp">{feel}</Text>
        </div>

        <div className="conditions__card ">
          <Text className="conditions__card--text">UV</Text>
          <Text className="conditions__card--temp">3</Text>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
