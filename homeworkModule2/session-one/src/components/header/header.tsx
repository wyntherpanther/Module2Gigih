import { useEffect, useState } from "react";
import axios from 'axios';
import Item from '../PlaylistItem/Item'
import FormSubmission from "../Form/form";
import TokenTaker from "../token/takingToken"
import { Skeleton } from "@mui/material";
import { useAppSelector } from "../token/hooks";
import { ItemA, IUser } from "../../storage/someDefinition"
import SearchBody from "../search/searchBody";
import SelectBody from "../Select/selectBody";

interface props {
    realHeader: JSX.Element;
}

const Header = ({ realHeader }: props) => {

    const token = useAppSelector(state => state.account.value);
    const [searchKey, setSearchKey] = useState<string>("")
    const [tracks, setTracks] = useState<ItemA[]>([])
    const [selectedTracks, setSelectedTracks] = useState<Array<ItemA>>([])
    const [combinedTrack, setCombinedTrack] = useState<Array<ItemA>>([])
    const [user, setUser] = useState<IUser>({
        name: '',
        description: '',
        public: true
    })


    ///////////////////////////////////////////Search handler/////////////////////////////////////////////////

    const searchArtists: React.FormEventHandler<HTMLFormElement> = async (e) => {
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
        const combinedTrackWithSelectedTrack = tracks.map((track: ItemA) => ({
            isSelected: selectedTracks.find((t: ItemA) => t.uri === track.uri),
            ...track,
        }));
        setCombinedTrack(combinedTrackWithSelectedTrack);
    }, [selectedTracks, tracks]);

    const handleSelectedTrack = (track: ItemA) => {
        const alreadySelected = selectedTracks.find((t) => t.uri === track.uri)
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter((t) => t.uri !== track.uri))
        } else {
            setSelectedTracks((selectedTracks) => [...selectedTracks, track])
        }
    }

    ///////////////////////////////////////////Select handler/////////////////////////////////////////////////
    console.log(Item)

    ///////////////////////////////////////////Form handler/////////////////////////////////////////////////

    const handleFormChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const uris = selectedTracks.map((item) => item.uri);
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

    ///////////////////////////////////////////Playlist List/////////////////////////////////////////////////

    ///////////////////////////////////////////Playlist List/////////////////////////////////////////////////
    function renderPlayListItems() {
        return combinedTrack.map((item) => {
            return (
                <Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} selected={false} />)
        })
    }

    function renderSelectedItems() {
        return selectedTracks.map((item) => {
            return (
                selectedTracks
                    ? (<Item key={item.uri} track={item} onSelectedTrack={handleSelectedTrack} selected={true} />)
                    : (<Skeleton variant="rectangular" width={210} height={118} />)
            )
        })
    }



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
                    {/* <Playlist /> */}

                    {realHeader}

                    <SearchBody
                        Selection=
                        {combinedTrack.length > 0
                            ? renderPlayListItems()
                            : skeleton
                        }
                    />
                    <SelectBody
                        Selection=
                        {selectedTracks.length > 0
                            ? renderSelectedItems()
                            : skeleton
                        }
                    />
                    <FormSubmission
                        user={user}
                        handleFormChange={handleFormChange}
                        handleFormSubmit={handleFormSubmit}
                    />

                </div>
            </div>
        </div>
    );
};

export default Header;
