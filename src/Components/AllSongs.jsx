import { useEffect,useState } from "react";
import SongCard from './SongCard'
import '../Style/allSongs.css'

export default function AllSongs() {
  const [songs,setSongs] = useState([])

    const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API}/songs`)
      .then((response) => response.json())
      .then((responseJSON) => setSongs(responseJSON))
      .catch((error) => console.error(error));
  });


    
        return(
            <div className="songs">
                {songs.map((tune)=> {

                    return <SongCard key={tune.id} tune={tune} />
                    
                })}
                </div>
          
        )



};