import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`);
  }

  return (
    <form onSubmit={cadastrarUsuario}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Digite a sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Cadastrar" />
      </div>
    </form>
  );
}

export default Form;
