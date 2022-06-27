import React from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handlerSearch(){
    //30720540/json/

    if(input === "") {
      alert("Preencha algum CEP");
      return;
    }

    try{
      const response = await api.get(`${input}/json/`);
      setCep(response.data);
      setInput("");

    }catch{
      alert("Eu to caçando aqui, rs, tenta de novo.");
      setInput("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Busca Endereço</h1>
      <p className="description">Encontre um endereço à partir do CEP</p>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handlerSearch}>
          <FiSearch size={13} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}

      <footer className="foot">
          &copy; Ana Monteiro
      </footer>
    </div>
    
  );
};

export default App;
