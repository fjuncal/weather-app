import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import { Titulo } from "./AppStyles";
import { useEffect, useState } from "react";
function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  useEffect;
  return (
    <>
      <div>
        <Titulo>Condições Climáticas</Titulo>
        <Busca />
        <ClimaAtual />
        <Previsao />
      </div>
    </>
  );
}

export default App;
