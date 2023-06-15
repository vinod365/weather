import { useEffect, useState } from "react";
import "./style.css";
import TodayForcast from "./../../components/today2";
import AirConditions from "./../../components/airconditions";
import Now from "./../../components/now";
import Search from "./../../components/search/";

import getWeather from "../../service/weather.service.js";

const Home = () => {
  const [temp, setTemp] = useState("30");
  const [local, setLocal] = useState("mohali");
  const [pressure, setPressure] = useState(30);
  const [humidity, setHumidity] = useState(0.2);
  const [feel, setFeel] = useState(3);

  useEffect(() => {
    const getData = async () => {
      const res = await getWeather(local);
      const temp = res.data["list"][0]["main"]["temp"] - 273.15;
      const pressure = res.data["list"][0]["main"]["pressure"];
      const humidity = res.data["list"][0]["main"]["humidity"];
      const feel = Math.trunc(
        res.data["list"][0]["main"]["feels_like"] - 273.15
      );

      setTemp(temp);
      setPressure(pressure);
      setHumidity(humidity);
      setFeel(feel);
    };

    getData();
  }, [local]);

  return (
    <div className="app">
      <Search setLocal={setLocal} />
      <Now temp={temp} local={local} />
      <TodayForcast temp={temp} />
      <AirConditions pressure={pressure} humidity={humidity} feel={feel} />
    </div>
  );
};

export default Home;
