import React from "react";
import { ICity } from "../App";
import Loader from "./Loader";

interface ICitiesWeather {
  cities: ICity[];
  loading: boolean
}

const CitiesWeather: React.FC<ICitiesWeather> = ({ cities, loading }) => {
   
  const renderCities = () => {
 
    return (
      !(cities.length === 0) &&
      cities.map((item, i) => (
        <li className="collection-item avatar" key={i}>
          <i className="material-icons circle teal">insert_chart</i>
          <span className="title"><strong>{item.name}</strong></span>
          <p>
            Temperature: <strong>{item.weather.temperature.actual}</strong>
          </p>
          <div className="secondary-content">
            <i className="material-icons">settings_system_daydream</i>
          </div>
        </li>
      ))
    );
  };
  return <ul className="collection">{renderCities()}{loading ? <Loader /> : ''}</ul>;
};

export default CitiesWeather;
