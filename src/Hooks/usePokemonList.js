import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonList() {

    const default_Url = "https://pokeapi.co/api/v2/pokemon"


    const [pokemonListState,setPokemonListState] = useState({
        pokemonList:[],
        pokemonUrl:default_Url,
        prevUrl:default_Url,
        nextUrl:default_Url
    })


    async function downloadPokemon() {
        const response = await axios.get(pokemonListState.pokemonUrl ? pokemonListState.pokemonUrl : default_Url)

        const pokemonResults = response.data.results

        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))

        const pokemonListData = await axios.all(pokemonPromise)

        const pokemonFinalList = pokemonListData.map((pokemonData) => {
            const pokemon = pokemonData.data

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })

        setPokemonListState({...pokemonListState,pokemonList:pokemonFinalList,nextUrl:response.data.next, prevUrl: response.data.previous })


    }

    useEffect(() => {
        downloadPokemon()
    }, [pokemonListState.pokemonUrl])

    return [pokemonListState,setPokemonListState]

}

export default usePokemonList;