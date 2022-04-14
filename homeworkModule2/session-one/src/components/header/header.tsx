import { useEffect, useState } from "react";
import axios from 'axios';
import Item from '../PlaylistItem/Item'
import FormSubmission from "../Form/form";
import TokenTaker from "../token/takingToken.jsx"
import { Button, Dialog, ImageList, Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../token/hooks";
import { ItemA, Tracks } from "../../storage/someDefinition"
// import { type } from "@testing-library/user-event/dist/type";

interface props {

    realHeader: any;

}
interface tracks {
    tracks: Tracks;
}

interface track {
    track: ItemA;
}

const Header = ({ realHeader }: props) => {

    const token = useAppSelector(state => state.account.value);
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState<tracks[]>([])
    const [selectedTracks, setSelectedTracks] = useState([])
    const [combinedTrack, setCombinedTrack] = useState([])
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        name: '',
        description: '',
        public: true
    })


    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////

    const searchArtists = async (e: any) => {
        e.preventDefault()
        const searchUrl = "https://api.spotify.com/v1/search";
        const Params = {
            q: searchKey,
            type: "track"
        }
        const { data } = await axios.get(searchUrl, { headers: { Authorization: `Bearer ${token}`, }, params: Params })
        setTracks(data.tracks.items)
    }

    console.log(token)
    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchKey(e.currentTarget.value)
    }

    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////

    useEffect(() => {
        const combinedTrackWithSelectedTrack = tracks.map((track) => ({
            isSelected: selectedTracks.find(t => t.uri === track.uri),
            ...track,
        }));
        setCombinedTrack(combinedTrackWithSelectedTrack);
    }, [selectedTracks, tracks]);

    const handleSelectedTrack = (track: object) => {
        const alreadySelected = selectedTracks.find(t => t.uri === track.uri)
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(t => t.uri !== track.uri))
        } else {
            setSelectedTracks((selectedTracks) => [...selectedTracks, track])
        }
    }

    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////


    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////

    const handleFormChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const uris = selectedTracks.map(item => item.uri);
        const headerAll = { Authorization: `Bearer ${token}` };
        const apiSpotify = "https://api.spotify.com/v1"
        const playlistRequest = {
            name: user.name,
            description: user.description,
            public: false,
        }

        axios.get(`${apiSpotify}/me`,
            { headers: headerAll })
            .then((response) => {
                axios.post(`${apiSpotify}/users/${response.data.id}/playlists`, playlistRequest,
                    { headers: headerAll })
                    .then((response) => {
                        axios.post(`${apiSpotify}/playlists/${response.data.id}/tracks`,
                            { uris: uris }, { headers: headerAll })
                        alert("Spotify playlist added")
                    })
            })

    }
    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////


    function renderPlayListItems() {
        return combinedTrack.map(item => {
            return (
                <Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} selected={false} />)
        })
    }

    function renderSelectedItems() {
        return selectedTracks.map(item => {
            return (
                selectedTracks
                    ? (<Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} selected={true} />)
                    : (<Skeleton variant="rectangular" width={210} height={118} />)
            )
        })
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const skeleton = <>
        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
        <Skeleton animation={false} variant="rectangular" width={180} height={270} />
    </>

    return (
        <div className="whole">

            <TokenTaker searchArtists={searchArtists} handleSearchChange={handleSearchChange} />

            <div className="body">
                <div className="main2">
                    {realHeader}
                    <div className="Songs">
                        <Typography gutterBottom variant="h3" component="div" >
                            Search Result.
                        </Typography>
                        <ImageList
                            sx={{
                                gridAutoFlow: "column",
                                gridTemplateColumns: "repeat(max(300px, 1fr))",
                                gridAutoColumns: "repeat(max(300px, 1fr),5)",
                                mx: 5
                            }}
                            gap={20}
                        >
                            {combinedTrack.length > 0
                                ? renderPlayListItems()
                                : skeleton
                            }
                        </ImageList>
                    </div>


                    <div className="selectedSongs">
                        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 3 }}>
                            Selected.
                        </Typography>
                        <ImageList
                            sx={{
                                gridAutoFlow: "column",
                                gridTemplateColumns: "repeat(max(300px, 1fr))",
                                gridAutoColumns: "max(300px, 1fr)",
                                mx: 5
                            }}
                            gap={20}
                        >
                            {selectedTracks.length > 0
                                ? renderSelectedItems()
                                : skeleton
                            }

                        </ImageList>
                    </div>

                    <Button variant="contained" onClick={handleClickOpen} sx={{ m: 5, py: 2, width: "91%" }}>
                        Make The Playlist Request
                    </Button>

                    <Dialog open={open} onClose={handleClose} >
                        <FormSubmission
                            handleClose={handleClose}
                            user={user}
                            handleFormChange={handleFormChange}
                            handleFormSubmit={handleFormSubmit}
                        />
                    </Dialog>

                </div>
            </div>
        </div>
    );
};

export default Header;
