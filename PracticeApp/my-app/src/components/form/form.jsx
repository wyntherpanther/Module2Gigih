const SearchBar = ({ gifs, handleSubmit, handleChange }) => {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputA"></label>
            <input value={gifs} name="inputA" id="inputA" className="inputA" onChange={handleChange} placeholder="What is it ?" />
            <input className="inputB" value="Submit" type="submit" />
        </form>
    )
}
export default SearchBar;