import { Stack, Typography } from "@mui/material";
import { RootObject } from "../../storage/someDefinition";

interface prop {
    playlist: RootObject
}

const PlaylistList = ({ playlist }: prop) => {
    const { images, name, tracks, owner } = playlist;

    return (
        <>
            <div className="playListList">
                <Stack direction="row" spacing={2}>
                    <img src={images[0].url} alt="playlistImg" />
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {tracks.total}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                        {owner.external_urls.spotify}
                    </Typography>
                </Stack>
            </div>


        </>
    )
}

export default PlaylistList