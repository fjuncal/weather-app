import React from "react";

const Previsao = ({ previsoes }) => {
  return (
    <div>
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
    </div>
  );
};

export default Previsao;
