import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Detail() {

    const [song, setSong] = useState({ name: "", });

    let navigate = useNavigate();
    let { index } = useParams();

    useEffect(() => {
        fetch(`${API}/songs/${index}`)
            .then((response) => response.json())
            .then((responseJSON) => setSong(responseJSON))
            .catch(() => navigate("/not-found"));
    }, [index, navigate]);

    return (
        <div className="detail">

            <h1>{song.artist}</h1>
            <br />
            <h2>{song.name}</h2>
            <br />

            <h2>{song.title}</h2>

            <br />
            <h2>{song.album}</h2>
            <br />

            <h2>{song.time}</h2>
            <br />
            <h2>{song.is_favorite}</h2>

        </div>
    )
}