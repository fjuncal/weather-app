import React from "react";

import { ClimaInfo } from "./ClimaAtualStyles";

const ClimaAtual = ({ clima }) => {
  return (
    <ClimaInfo>
      <h4>Nome</h4>
      <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
      <p>{clima.main.temp}ºC</p>
      <p>{clima.weather[0].description}</p>
    </ClimaInfo>
  );
};

export default ClimaAtual;
