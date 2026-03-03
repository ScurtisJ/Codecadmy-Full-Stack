import Track from './Track.jsx';

function Tracklist( { tracks, onAdd, onRemove } ){

    return (
        <div className="track-list">
            {tracks.map(track => (
                <Track 
                track={track} 
                key={track.id} 
                onAdd={onAdd}
                onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default Tracklist;
