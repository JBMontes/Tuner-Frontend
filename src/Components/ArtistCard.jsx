import { Link} from "react-router-dom"
import '../Style/ArtistCard.css'
export default function ArtistCard({ mcs }) {


    return (
        <div className="songCard">

            <Link to={`/artists/${mcs.id}`} className="cardLink"><p>{mcs.name}</p></Link>
            <br />
            <p>{mcs.category}</p>
            <br />
            <p>{mcs.hometown}</p>
            <br />
            {/* <p>Favorite: {mcs.is_favorite ? "⭐️" : "❌"}</p> */}

        </div>
    )
}