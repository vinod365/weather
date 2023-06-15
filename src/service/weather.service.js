import axios from "axios";

const getWeather = (location = "mohali") => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=b0454686b4c0f5459fed65be7ad96ae7`
  );
};

export default getWeather;
