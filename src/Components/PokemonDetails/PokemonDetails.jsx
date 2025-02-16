import { Link, useParams } from "react-router-dom"
import "./PokemonDetails.css"
import axios from "axios"
import { useEffect, useState } from "react"

function PokemonDetails() {

  const { id } = useParams()
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon/"

  const [pokemon, setPokemon] = useState(null)

  async function downloadPokemon() {
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
    downloadPokemon()
  }, [])

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
  </>
  )

}

export default PokemonDetails;