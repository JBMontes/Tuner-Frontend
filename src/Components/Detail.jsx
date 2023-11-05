import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Detail() {

    const [song, setSong] = useState({ name: "", });

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => setSong(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/songs/${id}`, { method: "DELETE" })
            .then(() => {
                navigate(`/songs`);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="detail">
            <div className="detailCard">
                <h2>Artist: {song.artist}</h2>
                <br />
                <h2>Name: {song.name}</h2>
                <br />
                <h2>Album: {song.album}</h2>
                <br />

                <h2>Year Released: {song.year_release}</h2>
                <br />
                <h2>Favorite: {song.is_favorite ? "⭐️" : "❌"}</h2>
            </div>
            <div className="button">
                <Link to={`/songs/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>

        </div>
    )
}