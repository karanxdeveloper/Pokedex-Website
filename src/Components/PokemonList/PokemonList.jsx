import "./PokemonList.css"

import Pokemon from "../Pokemon/Pokemon";

//this is a custom hook
import usePokemonList from "../../Hooks/usePokemonList";

function PokemonList() {
   

    const [pokemonList,prevUrl,nextUrl,setPokemonUrl] = usePokemonList()

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






