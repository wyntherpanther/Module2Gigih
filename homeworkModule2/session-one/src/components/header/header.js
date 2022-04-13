import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import Item from '../PlaylistItem/Item'
import FormSubmission from "../Form/form";
import TokenTaker from "../token/takingToken.jsx"
import { Button, Dialog, ImageList, Skeleton, Typography } from "@mui/material";


const Header = ({realHeader}) =>{

    const token = useSelector(state => state.account.value);
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [selectedTracks, setSelectedTracks] = useState([])
    const [combinedTrack, setCombinedTrack] = useState([])
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        name: '',
        description: '',
        public: true
    })
    

    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////
    
    const searchArtists = async (e) => {
        e.preventDefault()
        const searchUrl="https://api.spotify.com/v1/search";
        const Params = {
            q: searchKey,
            type: "track"
        }
        const {data} = await axios.get(searchUrl, {headers: {Authorization: `Bearer ${token}`,},params: Params})
        setTracks(data.tracks.items)
    }
 

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value)
        searchArtists();
    }

    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////

    useEffect((e) => {
        const combinedTrackWithSelectedTrack = tracks.map((track) => ({
            isSelected: selectedTracks.find(t => t.uri === track.uri),
            ...track,
        }));
        setCombinedTrack(combinedTrackWithSelectedTrack);
    }, [selectedTracks, tracks]);

    const handleSelectedTrack = (track) => {
        const alreadySelected = selectedTracks.find(t => t.uri === track.uri)
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(t => t.uri !== track.uri))
        } else {
            setSelectedTracks((selectedTracks) => [...selectedTracks, track])
        }
    }

    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uris = selectedTracks.map(item => item.uri);
        const headerAll = {Authorization: `Bearer ${token}`};
        const apiSpotify = "https://api.spotify.com/v1"
        const playlistRequest ={
            name: user.name,
            description: user.description,
            public: false,
        }

        axios.get(`${apiSpotify}/me`, 
        {headers: headerAll})
            .then((response) =>{
                axios.post(`${apiSpotify}/users/${response.data.id}/playlists`, playlistRequest,
                {headers: headerAll} )
                .then((response) =>{
                    axios.post(`${apiSpotify}/playlists/${response.data.id}/tracks`,
                    { uris: uris }, {headers:headerAll})
                    alert("Spotify playlist added")
                })     
            })
        
} 
    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////
   

    function renderPlayListItems() {
        return combinedTrack.map(item => {
            return (
                <Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} />) 
        })
    }

    function renderSelectedItems() {
        return selectedTracks.map(item => {
            return (
                selectedTracks
                ? (<Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} selected={true}/>)
                : (<Skeleton variant="rectangular" width={210} height={118}/>)
                )
        })
    }
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
    <div className="whole">

        <TokenTaker searchArtists={searchArtists} handleSearchChange={handleSearchChange}/>
        
        <div className="body">
            <div className="main2">
            
                <div className="Songs">  
                <Typography gutterBottom variant="h3" component="div" >
                Search Result.
                </Typography>
                    <ImageList
                    sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(max(300px, 1fr))",
                        gridAutoColumns: "max(300px, 1fr)",
                        mx:5
                    }}
                    gap={20}
                    >
                        {combinedTrack.length > 0
                        ?  renderPlayListItems()
                        :   <>
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        
                        </>
                        }
                        
                        
                    </ImageList>
                </div>
            

                <div className="selectedSongs">  
                    <Typography gutterBottom variant="h4" component="div" sx={{mb:3}}>
                    Selected.
                    </Typography>
                    <ImageList
                    sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(max(300px, 1fr))",
                        gridAutoColumns: "max(300px, 1fr)",
                        mx:5
                    }}
                    gap={20}
                    >
                        {selectedTracks.length > 0
                        ? renderSelectedItems()
                        :   <>
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
                        </>
                        }
                        
                    </ImageList>
                </div>
                <Button variant="contained" onClick={handleClickOpen} sx={{m : 5, py : 2, width:"91%"}}>
                    Make The Playlist Request
                </Button>
                <Dialog open={open} onClose={handleClose} > 
                <FormSubmission user={user} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
                </Dialog>
            </div>
        </div> 
    </div>
          );
};

export default Header;
