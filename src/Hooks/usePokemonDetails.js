import axios from "axios"
import { useEffect, useState } from "react"
import downloadPokemons from "../utils/downloadPokemons"
import { useParams } from "react-router-dom"

function usePokemonDetails(pokemonName) {

  const {id} = useParams()

    
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/"
  
    const [pokemon, setPokemon] = useState(null)

    const [pokemonListState,setPokemonListState] = useState({
      pokemonList:[],
      pokemonUrl:"",
      prevUrl:"",
      nextUrl:""
  })
  
    async function downloadGivenPokemon(id) {
      const response = await axios.get(DEFAULT_URL + ((pokemonName) ? pokemonName : id))
      const pokemon = response.data
      setPokemon({
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types
      })

      const types = response.data.types.map(t => t.type.name)

      return types[0]

  
    }

    async function downloadPokemonAndRelated(id){
      try {
        const type = await downloadGivenPokemon(id)
         downloadPokemons(pokemonListState,setPokemonListState,`https://pokeapi.co/api/v2/type/${type}`)
        
      } catch (error) {
          console.log("no pokemon found")
        
      }
    }
  
    useEffect(() => {
      downloadPokemonAndRelated(id)
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // This makes the scroll action smooth
    });
    }, [id,pokemonName])

    return [pokemon,pokemonListState]
 

}

export default usePokemonDetails