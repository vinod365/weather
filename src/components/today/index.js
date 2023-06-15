import { Card, Space, Typography } from "antd";
import React from "react";
import "./style.css";
const { Text } = Typography;
const TodayForcast = () => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="TODAY'S FORCAST"
        style={{
          width: 700,
          backgroundColor: "#ebecf0",
          border: 0,
        }}
      >
        <div className="forcast">
          <div>
            <Text>This is the text</Text>
            <Card
              style={{
                width: 200,
                backgroundColor: "green",
                border: 0,
              }}
            />
            <Text>This is the text</Text>
          </div>
          <Card
            style={{
              width: 200,
              backgroundColor: "green",
              border: 0,
            }}
          />
          <Card
            style={{
              width: 200,
              backgroundColor: "green",
              border: 0,
            }}
          />
        </div>
      </Card>
    </Space>
  );
};

export default TodayForcast;
