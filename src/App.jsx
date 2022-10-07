import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase></Frase>
      <hr />
      <HelloWorld />
      <hr />
      <SayMyName nome="Nicolas" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <hr />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        foto="https://via.placeholder.com/150"
      ></Pessoa>
      <hr />
      <List></List>
    </div>
  );
}

export default App;
