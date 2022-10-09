import React from "react";
import Button from "./eventos/Button";

function Evento() {
  function meuEvento() {
    console.log("Ativando primeiro evento");
  }

  function segundoEvento() {
    console.log("Ativando o segundo evento");
  }

  return (
    <>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </>
  );
}

export default Evento;
