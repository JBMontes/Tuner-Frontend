// import { useState } from "react";

 function Song({tune}){
    return(
        <div>
            <h1>songs</h1>

        <h3>{tune.name}</h3>
        <br />
        <h3>{tune.album}</h3>
        <br />
        <h3>{tune.year_release}</h3>
        <br />
        <h3>{tune.is_favorite}</h3>
       
        </div>
    )
}

export default Song