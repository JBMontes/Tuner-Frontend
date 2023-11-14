import { useEffect,useState } from "react";
import ArtistCard from './ArtistCard'
import '../Style/allArtists.css'

export default function AllArtists() {
  const [artists,setArtists] = useState([])

    const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API}/artists`)
      .then((response) => response.json())
      .then((responseJSON) => setArtists(responseJSON))
      .catch((error) => console.error(error));
  },[API]);


    
        return(<>
              <h1 className='playlistH'>Artists</h1>
            <div className="songs">
                {artists.map((mcs)=> {

                    return <ArtistCard key={mcs.id} mcs={mcs} />
                    
                })}
                </div>
                </>
        )



};