import React from "react";

const ClimaAtual = ({ clima }) => {
  return (
    <div>
      <h4>Nome</h4>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}ºC</p>
      <p>{clima.weather[0].description}</p>
    </div>
  );
};

export default ClimaAtual;
