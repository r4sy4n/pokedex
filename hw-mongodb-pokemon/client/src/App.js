import PokemonDetails from "./pages/PokemonDetails";
import ShowPokemon from "./components/ShowPokemon";
import { Route, Routes } from "react-router-dom";
import PokemonType from "./pages/PokemonType";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowPokemon />}/>
        <Route path="/pokemon/:name" element={<PokemonDetails />}/>
        <Route path="/pokemon/type/:type" element={ <PokemonType />}/>
      </Routes>    
    </div>
  );
}

export default App;
