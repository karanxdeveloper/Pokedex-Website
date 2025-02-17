import "./PokemonList.css"

import Pokemon from "../Pokemon/Pokemon";

//this is a custom hook
import usePokemonList from "../../Hooks/usePokemonList";

function PokemonList() {
   

    const  [pokemonListState,setPokemonListState] = usePokemonList()

    return (
        <>

            <div className="pokemon-list-wrapper">

                <div className="list-header">
                    <h1>pokemon list</h1>
                </div>

                <div className="page-btns">
                    <button className="prev-btn" onClick={()=>setPokemonListState({...pokemonListState,pokemonUrl:pokemonListState.prevUrl})}>Prev</button>
                    <button className="next-btn" onClick={()=>setPokemonListState({...pokemonListState,pokemonUrl:pokemonListState.nextUrl})}>Next</button>
                </div>


                <div className="pokemon-container">
                    {pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)}
                </div>

            </div>

        </>
    )

}

export default PokemonList;






