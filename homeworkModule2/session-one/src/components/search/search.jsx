const SearchComponent = ({ searchArtists, handleSearchChange }) => {
    return (
        <form className="searchForm" onSubmit={searchArtists}>
            <input className="searchInput" type="text" placeholder="Search" onChange={handleSearchChange} />
            <button id="button1" className="searchButton" type={"submit"}>Search</button>
        </form>
    )
}

export default SearchComponent