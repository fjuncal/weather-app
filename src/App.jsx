import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import { Titulo } from "./AppStyles";
import { useState } from "react";
import axios from "axios";
function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY || "";

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`
      );
      setClima(respostaClima.data);
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  };

  console.log(clima);
  return (
    <>
      <div>
        <Titulo>Condições Climáticas</Titulo>
        <Busca
          cidade={cidade}
          setCidade={setCidade}
          buscarClima={buscarClima}
        />
        <ClimaAtual />
        <Previsao />
      </div>
    </>
  );
}

export default App;
