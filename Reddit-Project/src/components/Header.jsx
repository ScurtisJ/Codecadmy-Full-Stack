import SearchBar from '../features/search/SearchBar';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">OceanBoard</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
