function SearchBar({ onSearch }) {
  
  const handleSearch = (event) => {
    event.preventDefault();

    const searchTerm = (event.target.elements.searchInput.value);
    onSearch(searchTerm);
  };
    return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input className="search-input" type="text" name="searchInput" placeholder="Enter a song, artist, or album" />
      <button type="submit">SEARCH</button>
    </form>
    );
}

export default SearchBar;