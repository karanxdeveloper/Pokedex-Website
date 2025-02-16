import "./Pokemon.css"
import { Link } from "react-router-dom"
function Pokemon({ name, url,id }) {

    return (

        <>
            <Link to={`/pokemon/${id}`} className="pokemon-card">
                <div className="pokemon-name">{name}</div>
                <div className="pokemon-image-container">
                    <img className="pokemon-image" src={url} alt="" />
                </div>

            </Link>


        </>

    )

}

export default Pokemon