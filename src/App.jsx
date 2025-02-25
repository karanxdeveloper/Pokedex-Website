
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import PokemonDetails from './Components/PokemonDetails/PokemonDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Pokedex/>} />
      <Route path="/pokemon/:id" element={<PokemonDetails/>} />



    </Routes>
  )
}

export default App
