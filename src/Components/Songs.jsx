import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL;

function Songs() {

    const [song, setSong] = useState([]);
    let { id } = useParams();

    // const handleAdd = (newSong) => {
    //     fetch(`${API}/artists/${id}/songs`, {
    //         method: "POST",
    //         body: JSON.stringify(newSong),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((responseJSON) => {
    //             setSong([responseJSON, ...song]);
    //         })
    //         .catch((error) => console.error("catch", error));
    // };

    // const handleDelete = (id) => {
    //     fetch(`${API}/artists/${id}/songs/${id}`, {
    //         method: "DELETE",
    //     })
    //         .then(
    //             (response) => {
    //                 const copySongArray = [...song];
    //                 const indexDeletedSong = copySongArray.findIndex((song) => {
    //                     return song.id === id;
    //                 });
    //                 copySongArray.splice(indexDeletedSong, 1);
    //                 setSong(copySongArray);
    //             },
    //             (error) => console.log(error)
    //         )
    //         .catch((error) => console.warn("catch", error));
    // };

    // const handleEdit = (updatedSong) => {
    //     fetch(`${API}/artists/${id}/songs/${updatedSong.id}`, {
    //         method: "PUT",
    //         body: JSON.stringify(updatedSong),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((responseJSON) => {
    //             const copySongArray = [...song];
    //             const indexUpdatedSong = copySongArray.findIndex((song) => {
    //                 return song.id === updatedSong.id;
    //             });
    //             copySongArray[indexUpdatedSong] = responseJSON;
    //             setSong(copySongArray)
    //         })
    //         .catch((error) => console.error(error));
    // };

    useEffect(() => {
        console.log(id)
        fetch(`${API}/artists/${id}/songs`)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                console.log(response)
                // setSong(response.allTunes)

            })
            .catch((error) => {
                console.error('Error fetching your data:', error)
            });
    }, [id, API]);

    return (
        <div className="songs">
            {song.map((tunes) => {
                <Song key={tunes.id}
                    tune={tunes}
                />
            }

            )}
        </div>

    );
}

export default Songs;