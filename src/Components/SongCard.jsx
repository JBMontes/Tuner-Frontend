import { Link} from "react-router-dom"
export default function SongCard({ tune }) {


    return (
        <div className="songCard">

            <Link to={`/songs/${tune.id}`}><p>{tune.name}</p></Link>
            <br />
            <p>{tune.artist}</p>
            <br />
            <p>{tune.album}</p>
            <br />
            <p>Favorite: {tune.is_favorite ? "⭐️" : ""}</p>

        </div>
    )
}