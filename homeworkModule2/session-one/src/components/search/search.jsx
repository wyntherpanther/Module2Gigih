import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchComponent = ({ searchArtists, handleSearchChange }) => {
    return (

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 30, m: '8px 0' }}
            className="searchForm" onSubmit={searchArtists}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What song do you want?"
                inputProps={{ 'aria-label': 'song search' }}
                onChange={handleSearchChange}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>

    )
}

export default SearchComponent