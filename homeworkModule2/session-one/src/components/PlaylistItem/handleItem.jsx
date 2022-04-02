import { useEffect, useState } from "react";
import Item from "./Item";

const ItemContainer = ({ tracks }) => {
    const [selectedTracks, setSelectedTracks] = useState([])
    const [combinedTrack, setCombinedTrack] = useState([])

    const handleSelectedTrack = (track) => {
        const alreadySelected = selectedTracks.find(t => t.uri === track.uri)
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(t => t.uri !== track.uri))
        } else {
            setSelectedTracks((selectedTracks) => [...selectedTracks, track])
        }
    }

    useEffect((e) => {
        const combinedTrackWithSelectedTrack = tracks.map((track) => ({
            ...track,
            isSelected: selectedTracks.find(t => t.uri === track.uri),
        }));
        setCombinedTrack(combinedTrackWithSelectedTrack);
    }, [selectedTracks, tracks]);

    function renderPlayListItems() {
        return combinedTrack.map(item => {
            const { uri } = item;
            return (
                <Item key={uri} track={item} onSelectedTrack={handleSelectedTrack} />
            )
        })
    }
    return <div className="wholePlaylist">{renderPlayListItems()}</div>

}
export default ItemContainer;
