import { useEffect, useState } from "react"
import downloadPokemons from "../utils/DownloadPokemons"

function usePokemonList() {

    const default_Url = "https://pokeapi.co/api/v2/pokemon"


    const [pokemonListState,setPokemonListState] = useState({
        pokemonList:[],
        pokemonUrl:default_Url,
        prevUrl:default_Url,
        nextUrl:default_Url
    })


    useEffect(() => {
        downloadPokemons(pokemonListState,setPokemonListState,default_Url)
    }, [pokemonListState.pokemonUrl])

    return [pokemonListState,setPokemonListState]

}

export default usePokemonList;