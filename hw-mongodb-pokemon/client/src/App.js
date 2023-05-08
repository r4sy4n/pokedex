import PokemonDetails from "./components/PokemonDetails";
import ShowPokemon from "./components/ShowPokemon";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowPokemon />}/>
        <Route path="/pokemon/:name" element={<PokemonDetails />}/>
      </Routes>    
    </div>
  );
}

export default App;
