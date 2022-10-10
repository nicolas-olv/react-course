import React from "react";

function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tudo bem?`;
  }

  return (
    <>{nome ? <p>{gerarSaudacao(nome)}</p> : <p>Ainda não há um nome</p>}</>
  );
}

export default Saudacao;
