import "../Style/Song.css"
import SongForm from "./SongForm"
import { useState } from "react";

 function Song({tunes, handleDelete, handleSubmit}){
    const [viewForm, setViewForm] = useState(false);
    const toggleForm = () =>{
        setViewForm(!viewForm);
    }
    return(
      
        <div className="songInfo">
           {viewForm ? (
               <SongForm
               tunes={tunes} 
               toggleForm={toggleForm}
               handleSubmit={handleSubmit}>
               </SongForm>
           ) : (
            <div >
               <h3>Song: {tunes.name}</h3>
               <br />
               <h3>Album: {tunes.album}</h3>
               <br />
               <h3>Year: {tunes.year_release}</h3>
               <br />
               <h3>Favorite: {tunes.is_favorite ? "✅" : "❌"}</h3>
               </div>
               
               )}
            <div> 
            <button onClick={toggleForm}>
                {viewForm ? "Back" : "Edit"}
            </button>
            <button onClick={() => handleDelete(tunes.id)}>Delete</button>
            </div>      
        </div>
   
    )
}

export default Song