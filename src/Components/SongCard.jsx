export default function SongCard({ tune }) {

    return (
        <div className="songCard">

            <p>{tune.name}</p>
            <br />
            <p>{tune.artist}</p>
            <br />
            <p>{tune.album}</p>
            <br />
            <p>{tune.is_favorite}</p>

        </div>
    )
}