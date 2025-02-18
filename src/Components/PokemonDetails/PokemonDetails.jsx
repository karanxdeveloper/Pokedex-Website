import { Link, useParams } from "react-router-dom"
import "./PokemonDetails.css"
import Pokemon from "../Pokemon/Pokemon"

//this is a custom hook
import usePokemonDetails from "../../Hooks/usePokemonDetails"


function PokemonDetails() {

  const { id } = useParams()

const [pokemon,pokemonListState] = usePokemonDetails(id)

  return (<>

    {pokemon &&
      <div className="main-details-container">

        <div className="detail-pokemon-info">

          <h1>{pokemon.name}</h1>
          <h3>Type:{pokemon.type.map(t => <span className="type-pokemon" key={t.type.name}>{t.type.name}</span>)}</h3>
          <h4>Weight:{pokemon.weight}</h4>
          <h4>height:{pokemon.height}</h4>
         
            <Link className="home-btn" to={"/"}>Home</Link>
          
        </div>

        <div className="detail-pokemon-img">
          <img src={pokemon.image} alt="" />
        </div>
      </div>}

      <div className="similar-pokemon">

        <h1>Similar Pokemons</h1>

        <div className="pokemon-similar-boxes">
          {pokemonListState.pokemonList.length > 0 && 
            pokemonListState.pokemonList.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)
          }
        </div>

      </div>

  </>
  )

}

export default PokemonDetails;