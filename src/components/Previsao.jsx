import React from "react";
import { PrevisaoContainer } from "./PrevisaoStyles";
const Previsao = ({ previsoes }) => {
  return (
    <PrevisaoContainer>
      <h4>precisão para as próximas horas</h4>
      <ul>
        {previsoes.map((previsao) => (
          <li previsao={previsao.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            <p>
              {previsao.main.temp}ºC - {previsao.weather[0].description}
            </p>
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
};

export default Previsao;
