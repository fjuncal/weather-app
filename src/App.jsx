import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import { Titulo } from "./AppStyles";
import { useState } from "react";
import axios from "axios";
function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState([]);
  const [previsao, setPrevisao] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY || "";

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
      );

      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}`
      );
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  };

  console.log(clima.length);

  return (
    <>
      <div>
        <Titulo>Condições Climáticas</Titulo>
        <Busca
          cidade={cidade}
          setCidade={setCidade}
          buscarClima={buscarClima}
        />
        {Object.values(clima).length > 0 && <ClimaAtual clima={clima} />}

        {previsao.length > 0 && <Previsao previsoes={previsao} />}
      </div>
    </>
  );
}

export default App;
