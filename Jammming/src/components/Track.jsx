function Track( {track, onAdd, onRemove} ){
    const addTrack = () => {
        if(onAdd){
            onAdd(track);
        }
    }

    const removeTrack = () => {
        if(onRemove){
            onRemove(track);
        }
    }

    return (
        <div className="track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {onAdd && <button className="Track-action" onClick={addTrack}>+</button>}
            {onRemove && <button className="Track-action" onClick={removeTrack}>-</button>}
        </div>

    );

}

export default Track;