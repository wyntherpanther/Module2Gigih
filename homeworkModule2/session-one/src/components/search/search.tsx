import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface props {
    searchArtists?: React.FormEventHandler<HTMLFormElement> | undefined;
    handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const SearchComponent = ({ searchArtists, handleSearchChange }: props) => {
    return (

        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 25, m: '10px 0' }}
            className="searchForm" onSubmit={searchArtists}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What song do you want?"
                inputProps={{ 'aria-label': 'song search' }}
                onChange={handleSearchChange}
            />
            <IconButton data-testid='buttonSearch' type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

        </Paper>

    )
}

export default SearchComponent