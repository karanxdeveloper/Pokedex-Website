import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonDetails(id) {

    
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/"
  
    const [pokemon, setPokemon] = useState(null)
  
    async function downloadPokemon(id) {
      const response = await axios.get(DEFAULT_URL + id)
      const pokemon = response.data
      setPokemon({
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types
      })
  
    }
  
    useEffect(() => {
      downloadPokemon(id)
    }, [])

    return [pokemon]
 

}

export default usePokemonDetails