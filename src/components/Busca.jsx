import React from "react";
import "./BuscaStyles";
import { BuscaContainer, BuscaCidade, BotaoBuscar } from "./BuscaStyles";
const Busca = ({ cidade, setCidade, buscarClima }) => {
  return (
    <BuscaContainer>
      <BuscaCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      ></BuscaCidade>
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

export default Busca;
