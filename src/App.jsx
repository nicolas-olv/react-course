import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
