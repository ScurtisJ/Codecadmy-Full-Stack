import Tracklist from './Tracklist.jsx';

function SearchResults( { tracks, onAdd } ){


    return (
        <div className="search-results">
            <div className="container">
                <h2>Results</h2>
            </div>
            {tracks.length !==0 && <Tracklist tracks={tracks} onAdd={onAdd}/>}
            {tracks.length ===0 && <p>No results found. Please try a different search.</p>}
        </div>
    );
}

export default SearchResults;