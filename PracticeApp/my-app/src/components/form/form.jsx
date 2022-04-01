const SearchBar = ({ gifs, handleSubmit, handleOnChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputA"></label>
            <input value={gifs} name="inputA" id="inputA" className="inputA" onChange={handleOnChange} placeholder="What is it ?" />
            <input className="inputB" value="Submit" type="submit" />
        </form>
    )
}
export default SearchBar;