import { Card, Space, Typography, Image } from "antd";
import React from "react";
import "./style.css";

// import ikg from "'./../../src/static/images/cloud.png";

const { Text } = Typography;
const TodayForcast = ({ temp }) => {
  return (
    <div className="today__forcast">
      <div className="heading">
        <Text className="heading--text">WEEKLY FORECAST</Text>
      </div>
      <div className="forcast__timewise">
        <div className="forcast">
          <Text className="time">Sunday</Text>
          <div className="icon">
            <Image src={require("./static/cloud.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp - 2)}°`}</Text>
        </div>
        <div className="forcast">
          <Text className="time">Monday</Text>
          <div className="icon">
            <Image src={require("./static/sun.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp - 4)}°`}</Text>
        </div>
        <div className="forcast">
          <Text className="time">Tuesday</Text>
          <div className="icon">
            <Image src={require("./static/cloud.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp - 3)}°`}</Text>
        </div>
        <div className="forcast">
          <Text className="time">Wednessday</Text>
          <div className="icon">
            <Image src={require("./static/sun.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp + 3)}°`}</Text>
        </div>
        <div className="forcast">
          <Text className="time">Thrusday</Text>
          <div className="icon">
            <Image src={require("./static/cloud.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp - 1)}°`}</Text>
        </div>
        <div className="forcast">
          <Text className="time">Friday</Text>
          <div className="icon">
            <Image src={require("./static/cloudy.png")}></Image>
          </div>
          <Text className="temp">{`${Math.trunc(temp + 1)}°`}</Text>
        </div>
      </div>
    </div>
  );
};

export default TodayForcast;
