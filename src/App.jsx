import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";
import { ClimaContainer, Titulo } from "./AppStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import "./AppStyles";
function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState([]);
  const [previsao, setPrevisao] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(position);

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      const respostaPrevisaoLocalizacaoBrowser = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${resposta.data.name}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setCidade(resposta.data.name);
      setClima(resposta.data);
      setPrevisao(respostaPrevisaoLocalizacaoBrowser.data.list.slice(0, 5));
    });
  }, []);

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      const respostaPrevisao = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setClima(respostaClima.data);
      setPrevisao(respostaPrevisao.data.list.slice(0, 5));
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  };

  return (
    <>
      <ClimaContainer>
        <Titulo>Condições Climáticas</Titulo>
        <Busca
          cidade={cidade}
          setCidade={setCidade}
          buscarClima={buscarClima}
        />
        {Object.values(clima).length > 0 && <ClimaAtual clima={clima} />}

        {previsao.length > 0 && <Previsao previsoes={previsao} />}
      </ClimaContainer>
    </>
  );
}

export default App;
