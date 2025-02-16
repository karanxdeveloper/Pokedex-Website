import { useState } from "react";
import "./PokemonList.css"

import { useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
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



    return (
        <>

            <div className="pokemon-list-wrapper">

                <div className="list-header">
                    <h1>pokemon list</h1>
                </div>

                <div className="page-btns">
                    <button className="prev-btn" onClick={()=>setPokemonUrl(prevUrl)}>Prev</button>
                    <button className="next-btn" onClick={()=>setPokemonUrl(nextUrl)}>Next</button>
                </div>


                <div className="pokemon-container">
                    {pokemonList.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
                </div>

            </div>

        </>
    )

}

export default PokemonList;






