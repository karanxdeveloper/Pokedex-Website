import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonList() {

    const default_Url = "https://pokeapi.co/api/v2/pokemon"

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonUrl,setPokemonUrl] = useState(default_Url)
    
    const [prevUrl, setPrevUrl] = useState(default_Url)
    const [nextUrl, setNextUrl] = useState(default_Url)


    async function downloadPokemon() {
        const response = await axios.get(pokemonUrl ? pokemonUrl : default_Url)
        const pokemonResults = response.data.results

        setPrevUrl(response.data.previous)
        setNextUrl(response.data.next)

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

        setPokemonList(pokemonFinalList)


    }

    useEffect(() => {
        downloadPokemon()
    }, [pokemonUrl])

    return [pokemonList,prevUrl,nextUrl,setPokemonUrl]

}

export default usePokemonList